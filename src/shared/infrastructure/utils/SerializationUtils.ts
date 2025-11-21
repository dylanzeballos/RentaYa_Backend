export class SerializationUtils {
  static serialize(obj: any): any {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (typeof obj === "bigint") {
      return obj.toString();
    }

    if (obj instanceof Date) {
      return obj.toISOString();
    }

    if (
      obj &&
      typeof obj === "object" &&
      (obj.constructor?.name === "Decimal" ||
        (typeof obj.s === "number" &&
          typeof obj.e === "number" &&
          Array.isArray(obj.d)))
    ) {
      if (typeof obj.toNumber === "function") {
        return obj.toNumber();
      }

      if (typeof obj.toString === "function") {
        return parseFloat(obj.toString());
      }

      if (obj.d && obj.d[0] !== undefined) {
        return obj.d[0] * (obj.s || 1);
      }

      return 0;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.serialize(item));
    }

    if (typeof obj === "object" && obj.constructor === Object) {
      const serialized: any = {};
      for (const [key, value] of Object.entries(obj)) {
        serialized[key] = this.serialize(value);
      }
      return serialized;
    }

    if (typeof obj === "object") {
      const serialized: any = {};

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          serialized[key] = this.serialize(obj[key]);
        }
      }

      return serialized;
    }

    return obj;
  }

  static serializePrismaData(data: any): any {
    return this.serialize(data);
  }

  static normalizeTimestamp(timestamp: any): string | any {
    if (!timestamp) return timestamp;

    try {
      let date: Date;

      if (timestamp instanceof Date) {
        date = timestamp;
      } else if (typeof timestamp === "string") {
        if (/^\d+$/.test(timestamp)) {
          const num = parseInt(timestamp, 10);
          date = new Date(num > 9999999999 ? num : num * 1000);
        } else {
          date = new Date(timestamp);
        }
      } else if (typeof timestamp === "number") {
        date = new Date(timestamp > 9999999999 ? timestamp : timestamp * 1000);
      } else if (typeof timestamp === "bigint") {
        const num = Number(timestamp);
        date = new Date(num > 9999999999 ? num : num * 1000);
      } else {
        return timestamp;
      }

      if (isNaN(date.getTime())) {
        return timestamp;
      }

      return date.toISOString();
    } catch (error) {
      console.error("Error normalizing timestamp:", error, "Input:", timestamp);
      return timestamp;
    }
  }

  static normalizeDateFields(
    obj: any,
    dateFields: string[] = ["createdAt", "updatedAt"],
  ): any {
    if (!obj || typeof obj !== "object") {
      return obj;
    }

    const normalized = { ...obj };

    for (const field of dateFields) {
      if (normalized[field]) {
        normalized[field] = this.normalizeTimestamp(normalized[field]);
      }
    }

    return normalized;
  }

  static deepNormalizeDateFields(
    data: any,
    dateFields: string[] = ["createdAt", "updatedAt"],
  ): any {
    if (!data) return data;

    if (Array.isArray(data)) {
      return data.map((item) => this.deepNormalizeDateFields(item, dateFields));
    }

    if (typeof data === "object" && data !== null) {
      const normalized: any = {};

      for (const [key, value] of Object.entries(data)) {
        if (dateFields.includes(key)) {
          normalized[key] = this.normalizeTimestamp(value);
        } else if (typeof value === "object" && value !== null) {
          normalized[key] = this.deepNormalizeDateFields(value, dateFields);
        } else {
          normalized[key] = value;
        }
      }

      return normalized;
    }

    return data;
  }
}

export const serializeBigInt = SerializationUtils.serialize;

export default SerializationUtils;

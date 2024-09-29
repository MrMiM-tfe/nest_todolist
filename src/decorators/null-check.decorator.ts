import { NotFoundException } from "@nestjs/common";

export function NullCheck() {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
  
      descriptor.value = async function (...args: any[]) {
        // Call the original method
        const result = await originalMethod.apply(this, args);
  
        // If the result is null, return the replacement value
        if (result === null) {
          throw new NotFoundException()
        }
  
        // Otherwise, return the original result
        return result;
      };
  
      return descriptor;
    };
  }
  
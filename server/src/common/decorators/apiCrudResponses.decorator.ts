import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export function ApiCrudResponses(
  dto: any,
  operation: 'create' | 'read' | 'update' | 'delete',
  entityName: string,
  isArray: boolean = false,
) {
  const name = entityName || dto;
  const operationDescriptions = {
    create: {
      status: 201,
      description: `${name} was created.`,
    },
    read: {
      status: 200,
      description: `${name} fetched successfully.`,
    },
    update: {
      status: 200,
      description: `${name} was updated.`,
    },
    delete: {
      status: 200,
      description: `${name} was deleted.`,
    },
  };

  const selectedOperation = operationDescriptions[operation];
  const responseType = isArray ? [dto] : dto;

  return applyDecorators(
    ApiResponse({
      status: selectedOperation.status,
      description: selectedOperation.description,
      type: responseType,
    }),
    ApiResponse({ status: 400, description: 'Bad request.' }),
    ApiResponse({ status: 401, description: 'Unauthorized.' }),
    ApiResponse({ status: 404, description: `${name} not found.` }),
    ApiResponse({ status: 409, description: `${name} conflict.` }),
    ApiResponse({ status: 500, description: 'Internal server error.' }),
  );
}

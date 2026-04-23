import { applyDecorators, HttpCode, HttpStatus, Type } from "@nestjs/common";
import { ApiExtraModels, ApiResponse, getSchemaPath } from "@nestjs/swagger";
import { Response } from "./response.interceptor";

export const ApiAppResponse = <DataDto extends Type<unknown>>(
    dataDto: DataDto,
    status: HttpStatus = HttpStatus.OK
) => {
    return applyDecorators(
        HttpCode(status),
        ApiExtraModels(Response, dataDto),
        ApiResponse({
            status,
            schema: {
                allOf: [
                    { $ref: getSchemaPath(Response) },
                    {
                        properties: {
                            data: {
                                $ref: getSchemaPath(dataDto)
                            }
                        }
                    }
                ]
            }
        })
    )
}

export const ApiOkAppResponse = <DataDto extends Type<unknown>>(dataDto: DataDto, status: HttpStatus = HttpStatus.OK) =>
    ApiAppResponse(dataDto, status)

export const ApiCreatedAppResponse = <DataDto extends Type<unknown>>(dataDto: DataDto, status: HttpStatus = HttpStatus.CREATED) =>
    ApiAppResponse(dataDto, status)

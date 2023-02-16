import { Express, Response, Request } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json"
import logger from "./logger";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: 'Office Reservation API Docs',
            version
        },
        components:{
            securitySchemas:{
                bearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",   
                },
            },
        },
        security:[
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/*.routes.ts", "./src/schemas/*.schema.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express, port: number){
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    logger.info(`Docs available at http://localhost:${port}/docs`);
}
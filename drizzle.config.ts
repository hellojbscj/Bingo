import "dotenv/config";
import type { Config } from "drizzle-kit";



export default  {
  dialect:"postgresql",
  out: "./drizle",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config ;


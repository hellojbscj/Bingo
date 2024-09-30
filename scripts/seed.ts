import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//TS-IGNORE
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding Database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/sp.svg",

            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/in.svg",

            },
            {
                id: 3,
                title: "French",
                imageSrc: "/fu.svg",

            },
            
            {
                id: 4,
                title: "Japanese",
                imageSrc: "/jn.svg",

            },
            


        ]);

        await db.insert(schema.units).values( [
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId: 1,
                order: 1,
                title: "Nouns",
            },
            {
                id:2,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
            {
                id:3,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
            {
                id:4,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
            {
                id:5,
                unitId: 1,
                order: 2,
                title: "Verbs",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId:1, //Nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"?',
            },
            {
                id: 2,
                lessonId:1, //Nouns
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 3,
                lessonId:1, //Nouns
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the robot"?',
            },
           
            
            
        ]);
       


        await db.insert(schema.challengeOptions).values([
            {
                challengeId:1,
                imageSrc:"/men.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/sp_men.mp3",
            },
            {
                challengeId:1,
                imageSrc:"/women.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/sp_women.mp3",
            },
            {
                challengeId:1,
                imageSrc:"/robo.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/sp_robo.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                
                challengeId:2,
                correct: true,
                text: "el hombre",
                audioSrc: "/sp_men.mp3",
            },
            {
                
                challengeId:2,
                correct: false,
                text: "la mujer",
                audioSrc: "/sp_women.mp3",
            },
            {
                
                challengeId:2,
                correct: false,
                text: "el robot",
                audioSrc: "/sp_robo.mp3",
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                
                challengeId:3,
                imageSrc:"/men.svg",
                correct: false,
                text: "el hombre",
                audioSrc: "/sp_men.mp3",
            },
            {
                
                challengeId:3,
                imageSrc:"/women.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/sp_women.mp3",
            },
            {
                
                challengeId:3,
                imageSrc:"/robo.svg",
                correct: true,
                text: "el robot",
                audioSrc: "/sp_robo.mp3",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 4,
                lessonId:2, //verbs
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"?',
            },
            {
                id: 5,
                lessonId:2, //verbs
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 6,
                lessonId:2, //verbs
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the robot"?',
            },
           
            
            
        ]);
       





        console.log("Seeding finished");

    } catch (error) {
        
        console.error(error);
        throw new Error("Failed to seed database");
    }
};

main();

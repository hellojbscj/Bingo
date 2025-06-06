"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitEdit } from "./unit/edit";
import { UnitCreate } from "./unit/create";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
   return (
      <Admin dataProvider={dataProvider}>
         <Resource
            name="courses"
            list={CourseList}
            create={CourseCreate}
            edit={CourseEdit}
            recordRepresentation="title"
         >

         </Resource>

         <Resource
            name="units"
            list={UnitList}
            create={UnitCreate}
            edit={UnitEdit}
            recordRepresentation="title"
         >

         </Resource>

         <Resource
            name="lessons"
            list={LessonList}
            create={LessonCreate}
            edit={LessonEdit}
            recordRepresentation="title"
         >

         </Resource>

         <Resource
            name="challenges"
            list={ChallengeList}
            create={ChallengeCreate}
            edit={ChallengeEdit}
            recordRepresentation="question"
         >
         </Resource>

         <Resource
            name="challengeOptions"
            list={ChallengeOptionList}
            create={ChallengeOptionCreate}
            edit={ChallengeOptionEdit}
            recordRepresentation="text"
            options={{ label: "Challenge Options" }}
         >
         </Resource>


      </Admin>
   )

};

export default App;
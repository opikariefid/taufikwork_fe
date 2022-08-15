import { Button, IconButton } from "@mui/material";
import { RiHome2Line } from "react-icons/ri";
import CardProject from "../components/cardproject";
import Header from "../components/header";
import LayoutMobile from "../components/layout/mobile";
import * as Axios from '../helper/axios';

export async function getServerSideProps() {
  const skills = await Axios.get('/faker/skills');
  const projects = await Axios.get('/faker/projects');
  // Pass data to the page via props
  return { 
      props: { 
        'skills' : skills.data,
        'projects' : projects.data,
      } 
  }
}

export function ProjectList({ data = [] }) {
  return (
    <>
      {
        data.map((list, index) => (
          <CardProject data={list} key={`project-${index}`} />
        ))
      } 
    </>
  )
   
}

export default function Home({ skills, projects }) {
  return (
    <LayoutMobile header={<Header/>}>
      <main>
        <div className="font-quicksand">
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="text-3xl font-bold mb-2">My Project</div>
            </div>
            <div className="text-base font-medium">
              Beberapa project yang pernah dikerjakan oleh saya.
            </div>
            <div className="text-base italic font-bold mt-1">
              ”Some of the projects I've worked on.”
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectList data={projects} />
          </div>
        </div>
      </main>
    </LayoutMobile>
  )
}
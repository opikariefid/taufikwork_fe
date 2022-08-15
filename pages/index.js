import { Button, Link, IconButton } from "@mui/material";
import { RiLinkedinBoxLine, RiInstagramLine, RiHome2Line } from "react-icons/ri";
import CardProject from "../components/cardproject";
import Header from "../components/header";
import LayoutMobile from "../components/layout/mobile";
import * as Axios from '../helper/axios';
import NextLink from "next/link";

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
            <div className="w-[150px] h-[150px] overflow-hidden rounded-full">
              <img className="w-full h-full rounded-full p-2 border-2 border-black border-solid" src="/assets/img/avatar.jpg"></img>
            </div>
            <div className="font-quicksand mt-3">
              <div className="text-3xl font-bold uppercase">Taufik Arif</div>
              <div>
                <IconButton href="https://www.linkedin.com/in/taufikarif/" target={'_blank'}>
                  <RiLinkedinBoxLine className="text-3xl text-black pointer-events-none"/>
                </IconButton>
                <IconButton href="https://www.instagram.com/taufikarif.work/" target={'_blank'}>
                  <RiInstagramLine className="text-3xl text-black pointer-events-none"/>
                </IconButton>
                <Button className="underline text-base font-bold capitalize font-quicksand text-black" href="mailto:taufikarif.work@gmail.com">Contact Me</Button>
              </div>
            </div>         
            <div className="text-base font-medium">
              Seorang Frontend Developer berbasis di Bogor ID. Dapat membuat sebuah aplikasi mobile dan sebuah website.
            </div>
            <div className="text-base italic font-bold mt-1">
              “A Frontend Developer based in Bogor ID. Can create a mobile application and a website.”
            </div>
          </div>
          <div className="mb-4">
            <div className="text-3xl font-bold mb-2">Skills</div>
            <div className="text-base font-medium">
            Keahlian saya dibidang Frontend Developer.
            </div>
            <div className="text-base italic font-bold mt-1">
              ”My skill on Frontend Developer.”
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-x-1 gap-y-2">
            {
              skills.map((list, index) => (
                <>
                  <Link href={list.link == '' ? '#' : list.link} target={list.link == '' ? '' : '_blank'}>
                    <Button key={`skills-${index}`} disableElevation variant="contained" className="capitalize tracking-wider rounded-full font-bold font-quicksand">{list.name}</Button>
                  </Link>
                </>
              ))
            }
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="text-3xl font-bold mb-2">My Project</div>
              <NextLink href={'/projects'}>
                <Button disableElevation className="capitalize text-base underline font-bold font-quicksand text-black">See More</Button>
              </NextLink>
            </div>
            <div className="text-base font-medium">
              Beberapa project yang pernah dikerjakan oleh saya.
            </div>
            <div className="text-base italic font-bold mt-1">
              ”Some of the projects I've worked on.”
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectList data={projects.slice(0,2)} />
          </div>
          <div className={`text-base font-bold my-2 text-right ${(projects.length - 2) < 1 ? 'hidden' : 'block'}`}>
            <NextLink href={'/projects'}>
              <Button disableElevation className="capitalize text-base underline font-bold font-quicksand text-black">And {projects.length - 2} more...</Button>
            </NextLink>
          </div>
        </div>
      </main>
    </LayoutMobile>
  )
}
import {groq} from "next-sanity";
import client from "./sanity.client";

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"]{
      name,
      "imageUrl": serviceImage.asset->url,
      "imageUrl2": serviceIcon.asset->url,
      slug,
      details
    }`
  )
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      name,
      "imageUrl": serviceImage.asset->url,
      category,
      slug,
      date,
      details
    }`
  )
}

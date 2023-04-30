import { GetServerSideProps } from "next";
import { getSortedPostsData } from "../lib/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${process.env.NEXT_PUBLIC_SITE_URL}</loc>
     </url>
     <url>
       <loc>${process.env.NEXT_PUBLIC_SITE_URL}/api/hello</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = getSortedPostsData();
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export { SiteMap as default, getServerSideProps };

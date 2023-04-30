import { getSortedPostsData } from "../lib/posts";

const PUBLIC_DOMAIN = "https://nextjs-blog-murphyslaw.vercel.app";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nextjs-blog-murphyslaw.vercel.app</loc>
     </url>
     <url>
       <loc>https://nextjs-blog-murphyslaw.vercel.app/api/hello</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${PUBLIC_DOMAIN}/posts/${id}`}</loc>
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

async function getServerSideProps({ res }) {
  const posts = getSortedPostsData();
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export { SiteMap as default, getServerSideProps };

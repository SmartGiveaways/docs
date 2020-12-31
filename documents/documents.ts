import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";
import matter from "gray-matter";

const rootDir = path.join(process.cwd(), "documents");

export const getCategories = () => {
  const directories = fs.readdirSync(rootDir);
  return directories;
};

export const getMeta = () => {
  const documents = [];
  getCategories().forEach((category) => {
    if (category === "documents.ts") {
      return; 
    }
    fs.readdirSync(path.join(rootDir, category)).forEach((file) => {
        if (file.endsWith(".md")) {
          documents.push({
            params: {
              meta: [category, file.replace(".md", "")]
            }
          });
        }
    });
  });
  return documents;
}

export const getData = async (meta) => {
  const category = meta[0];
  const document = meta[1];
  const documentPath = path.join(rootDir, `${category}/${document}.md`);
  const contents = fs.readFileSync(documentPath, "utf8");
  
  const result = matter(contents);
  const htmlContentPromise = await remark()
    .use(html)
    .process(result.content);
  const htmlContent = htmlContentPromise.toString();
  return {
    meta,
    htmlContent,
    ...result.data
  }
} 
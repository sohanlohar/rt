import { blogs } from "@/utils/blogs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({ params: { blog: blog.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((b) => b.slug === params.blog);
  return { props: { blog } };
}

const BlogDetail = ({ blog }) => {
  const router = useRouter();
  console.log("🚀 ~ router:", router)

  if (!blog) return <p className="text-center text-red-500">Blog not found</p>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/blog" className="text-blue-500 font-bold">
        ← Back to Blogs
      </Link>

      {/* <p className="text-gray-600">
        By {blog.author} on {blog.publishedDate}
      </p> */}
      <div className="mt-4 w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={blog.featureImage}
          alt={blog.title}
          className="w-full h-full object-cover rounded-40"
        />
      </div>
      <h1 className="text-3xl font-bold my-5">{blog.title}:</h1>
      <div className="mt-4">
        {blog.content.map((blogItem, index) => {
          console.log("Blog Item:", blogItem);
          if (blogItem.type === "heading") {
            return (
              <h2
                key={index}
                className="text-4xl font-bold font-archivo text-black-dark mt-4"
              >
                {blogItem.text}
              </h2>
            );
          }
          if (blogItem.type === "paragraph") {
            return (
              <p key={index} className="text-black text-xl font-karla mt-2">
                {blogItem.text}
              </p>
            );
          }

          // ✅ Handle Sub Heading
          if (blogItem.type === "subHeading") {
            return (
              <h5
                key={index}
                className="text-black text-xl font-karla font-bold mt-5"
              >
                {blogItem.text}
              </h5>
            );
          }

          // ✅ Handle Image
          if (blogItem.type === "image") {
            return (
              <div
                key={index}
                className="mt-4 w-full h-[500px] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={blogItem.src}
                  alt={blogItem.alt}
                  className="w-full h-full object-cover rounded-40"
                />
              </div>
            );
          }

          // ✅ Case 1: Handle Steps
          if (blogItem.type === "steps") {
            return (
              <div key={index} className="mt-6">
                <h2 className="text-xl font-bold">{blogItem.heading}</h2>
                <p className="text-gray-700 mt-2">{blogItem.description}</p>
                <div className="mt-4 space-y-6">
                  {blogItem.items.map((step, i) => (
                    <div
                      key={i}
                      className="p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg"
                    >
                      <h3 className="text-lg font-semibold">{step.step}</h3>
                      <p className="text-gray-600">{step.description}</p>

                      {/* Unordered List in Steps */}
                      {step.list && step.list.length > 0 && (
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                          {step.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // ✅ Case 2: Handle Unordered List (Bullet Points)
          if (blogItem.type === "list") {
            return (
              <div key={index} className="mt-4">
                <h2 className="text-xl font-bold">{blogItem.heading}</h2>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  {blogItem.items.map((item, i) => (
                    <li key={i}>
                      <span className="font-semibold">{item.heading}</span>
                      <p className="text-gray-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          // ✅ Case 3: Handle Ordered List (Numbered List)
          if (blogItem.type === "numberedList") {
            return (
              <div key={index} className="mt-4">
                <h2 className="text-xl font-bold">{blogItem.heading}</h2>
                <ol className="list-decimal ml-6 mt-2 text-gray-700 space-y-2">
                  {blogItem.items.map((item, i) => (
                    <li key={i}>
                      <span className="font-semibold">{item.heading}</span>
                      <p className="text-gray-600">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* <div className="mt-4">
        <span className="font-semibold">Categories: </span>
        {blog.categories.join(", ")}
      </div>
      <div>
        <span className="font-semibold">Tags: </span>
        {blog.tags.map((tag, i) => (
          <span key={i} className="text-blue-500">
            #{tag}{" "}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default BlogDetail;

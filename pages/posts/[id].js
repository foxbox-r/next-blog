import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    // fallback: true,
    fallback: false,
    // fallback: "blocking",
  };
}

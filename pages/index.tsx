import { Box, Layout } from "@components";

import { theme } from "@styles";
console.log(theme.colors);

const IndexPage = () => {
  return (
    <Layout>
      <h1>Colors</h1>
      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(5, min-content)",
          my: "$4",
        }}
      >
        <Box css={{ size: "$9", backgroundColor: "$blue-50" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-100" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-200" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-300" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-400" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-500" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-600" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-700" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-800" }} />
        <Box css={{ size: "$9", backgroundColor: "$blue-900" }} />
      </Box>
    </Layout>
  );
};

export default IndexPage;

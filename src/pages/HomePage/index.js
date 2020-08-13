import * as React from "react";
import Template from "components/Template";
import Header from "components/Header";
import Content from "components/Content";
import Filter from "components/Filter";
import PostCard from "components/PostCard";
import PostService from "services/postsService";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPosts, setCurrentPosts] = React.useState([]);
  const [currentFilter, setCurrentFilter] = React.useState({
    filterValue: "hot",
  });

  React.useEffect(() => {
    const startFunction = async () => {
      try {
        setIsLoading(true);
        setCurrentPosts(await PostService.getPosts(currentFilter.filterValue));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed at HomePage startFunction", error);
      }
    };

    startFunction();
  }, [currentFilter]);

  const renderPosts = () => {
    return currentPosts.map((postObj) => (
      <PostCard key={postObj.id} postObj={postObj} />
    ));
  };

  return (
    <Template>
      <Header title="ReactJS" />
      <Filter
        selectedFilter={currentFilter}
        onFilter={(filter) => setCurrentFilter(filter)}
      />
      <Content>{isLoading ? <div>LOADING.......</div> : renderPosts()}</Content>
    </Template>
  );
};

export default HomePage;

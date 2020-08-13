import * as React from "react";
import Template from "components/Template";
import Header from "components/Header";
import Content from "components/Content";
import Filter from "components/Filter";
import PostCard from "components/PostCard";
import LoadMore from "components/LoadMore";
import PostService from "services/postsService";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPosts, setCurrentPosts] = React.useState([]);
  const [currentFilter, setCurrentFilter] = React.useState({
    filterValue: "hot",
    force: false,
  });
  const [loadMore, setLoadMore] = React.useState(false);

  React.useEffect(() => {
    initializePageLogic();
    // eslint-disable-next-line
  }, [currentFilter]);

  const initializePageLogic = async () => {
    try {
      // When update is for load more we pass the lastId of the last post in currentPosts state
      if (loadMore && currentPosts && !currentFilter.force) {
        const lastPostId = currentPosts[currentPosts.length - 1].id;
        const newPosts = await PostService.getPosts(
          currentFilter.filterValue,
          lastPostId
        );

        setCurrentPosts((cP) => cP.concat(newPosts));
        setLoadMore(false);

        window.setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 10);
      } else {
        setIsLoading(true)
        setCurrentPosts(await PostService.getPosts(currentFilter.filterValue));
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Failed at HomePage initializePageLogic", error);
    }
  };

  const renderPosts = () => {
    return (
      <React.Fragment>
        {currentPosts.map((postObj) => (
          <PostCard key={postObj.id} postObj={postObj} />
        ))}
        <LoadMore onClick={handleLoadMore} />
      </React.Fragment>
    );
  };

  const handleLoadMore = () => {
    setLoadMore(true);
    setCurrentFilter({ ...currentFilter, force: false });
  };

  return (
    <Template>
      <Header />
      <Filter
        selectedFilter={currentFilter}
        onFilter={(filter) => setCurrentFilter(filter)}
      />
      <Content>{isLoading ? <div>LOADING.......</div> : renderPosts()}</Content>
    </Template>
  );
};

export default HomePage;

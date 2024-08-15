import { useEffect, useState } from 'react';
import { PUBLIC_APIS } from '../apis/apis';

function PostListing() {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchPosts = async () => {
    try {
      const { data } = await PUBLIC_APIS.get('/posts');
      console.log({ data });
      setPosts(data?.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const createPost = async (body) => {
    try {
      const { data } = await PUBLIC_APIS.post('/posts', body);
      console.log({ data });
      setPosts((prevPosts) => [...prevPosts, data?.post]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    await createPost({ title, description });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <hr />
      <h2>Create Posts updates</h2>
      <form onSubmit={handleSubmit}>
        {' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
      </form>
      <hr />
      <h2>Listing</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {posts?.map((post, index) => (
          <div key={index}>
            <strong>Title: {post?.title}</strong>
            <div>Description: {post?.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostListing;

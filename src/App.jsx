import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime+time);
    // console.log('removed', id);
    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header/>
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}/>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </main>
    </>
  )
}

export default App

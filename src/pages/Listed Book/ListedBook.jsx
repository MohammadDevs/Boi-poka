import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import ReadListCard from '../Read List Card/ReadListCard';
import Book from '../Book/Book';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const ListedBook = () => {

    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    // console.log(readList)

    // Sort functions
    const [sort,setSort] = useState("");
    const handleSort = (type) => {
      setSort(type)
      if(type === "pages") {
        const sortedByPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
        setReadList(sortedByPages)
      }
      if(type === "rating") {
        const sortedByRating = [...readList].sort((a,b)=> a.rating - b.rating);
        setReadList(sortedByRating)
      }
    }
    useEffect(()=>{
        const storeBookData = getStoredBook();
        const ConvertedBookData = storeBookData.map(id=> parseInt(id))
        const myReadList = data.filter(book => ConvertedBookData.includes(book.bookId))
        setReadList(myReadList)
    },[]) 
    return (
        <div>
          {/* Start */}
            <div className='flex justify-center mb-10 mt-2'>
              <button className="btn bg-green-500 text-white hover:bg-green-400" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
              Sort By {sort ? sort : ""} <span> <FaAngleDown></FaAngleDown> </span>
            </button>

            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
              <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
              <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
            </ul>
            </div>
          {/* End */}
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Read Books{readList.length}</h2>
      
    <div className='grid grid-cols-3 mb-8'>
        {
            readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
        }
    </div>

    </TabPanel>
    <TabPanel>
      <h2>Wishlist Books{readList.length}</h2>

    <div className='mb-8'>
        {
          readList.map(list=><ReadListCard key={list.bookId} list={list}></ReadListCard>)
        }
    </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;
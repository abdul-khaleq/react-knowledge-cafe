import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 rounded">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h3 className='text-center'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}/>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;
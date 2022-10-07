import './App.css';

import CommentCard from './Components/Comment/CommentCard';
import POWERED_BY from './Modules/ModuleConstantPoweredBy';
import DATA from './Modules/ModuleData';
import FrameWhite from "./Components/FrameWhite";
const DEFAULT_USER={"image":{"png":"/images/avatars/image-amyrobson.png"},"username":"Default user name"}



function App() {
  return (
    <div className="App">
      <div className='comments-page'>
        {
          DATA.comments.map(comment=>{
            return (<FrameWhite>
              <CommentCard
                vote={comment.score}
                user={comment.user}
                comment={comment.content}
                createdAt={comment.createdAt}
              />
            </FrameWhite>)
          })
        }

        <CommentCard
          vote='12'
          user={DEFAULT_USER}
          comment='Fuera del marco'
        />
      </div>
      {POWERED_BY} 
    </div>
  );
}

export default App;

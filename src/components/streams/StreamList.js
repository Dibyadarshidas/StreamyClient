import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams, deleteStream } from "../../actions";
import { useHistory } from "react-router-dom";
import Modal from '../Modal';
const StreamList = ({ allStreams, fetchStreams, auth, deleteStream }) => {
  const history = useHistory();
  /*   const [streamsList, setStreamsList] = useState(null); */

  //USE EFFECT
  useEffect(() => {
    const a = async () => {
      await fetchStreams();
    };
    a();
  }, []);

  //RENDER LISTS
  const renderList = Object.values(allStreams).map((stream) => {
    //console.log(stream)
    return (
      <div key={stream.id} className="ui relaxed divided list">
        <div className="item">
          {auth.userId === stream.userId && (
            <>
              <div
                onClick={() => {
                  history.push(`/stream/delete/${stream.id}`)
                  //deleteStream(stream.id);
                }}
                className="right floated ui button negative "
              >
                Delete
              </div>
              <Link
                to={`/stream/edit/${stream.id}`}
                className="ui right floated button primary"
              >
                Edit
              </Link>
            </>
          )}

          <i className="large camera middle aligned icon"></i>
          <div className="content">
            <Link to={`/stream/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      </div>
    );
  });

  //RENDER CREATE STREAM BUTTON
  const renderButton = () => {
    return (
      auth.isSignedIn && (
        <button
          onClick={() => {
            history.push("/stream/create");
          }}
          class="positive ui button"
        >
          Create Stream
        </button>
      )
    );
  };
  return (
    <>
      <div className="ui container">
        {renderList}
        {renderButton()}
      </div>

    </>
  );
};
const mapStateToProps = (state) => {
  return { allStreams: state.streams, auth: state.auth };
};
export default connect(mapStateToProps, { fetchStreams, deleteStream })(
  StreamList
);

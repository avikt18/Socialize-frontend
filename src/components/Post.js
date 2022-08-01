import './Post.css'
import { HeartOutlined} from '@ant-design/icons'
// import { Avatar, Card, Skeleton } from 'antd';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../redux/postSlice'
import LoadingSpiner from './LoadingSpiner'
import {likePost} from '../redux/postSlice'

// const {Meta} = Card

function Post(props) {
    const status = useSelector(state => state.posts.likePostStatus)
    const dispatch = useDispatch()
    return (
        <div className='post-container'>
            <div className='h-menu'>
                <div className='h-menu-items'>
                    {
                        status === STATUS.LOADING ? <LoadingSpiner /> : <HeartOutlined style={{ fontSize: '22px', color: '#cdcdcd' }} onClick={()=>dispatch(likePost(props?._id))}/>
                    }
                </div>
                {/* <div className='h-menu-items'>
                    <EditOutlined style={{ fontSize: '22px', color: '#cdcdcd' }} />
                </div> */}
            </div>
            <div className='post-card'>
                <img src={props.selectedFile} className='post-img' alt="" />
                <div className='post-content'>
                    <div className='top-section'>
                        <h1 className='post-title'>{props.title}</h1>
                        <div className='like-count'>
                            <span>{props.likeCount}</span> <HeartOutlined />
                        </div>
                    </div>
                    <pre className='post-message'>{props.message}</pre>
                    <hr className='blue-line' />
                    <div className='bottom-section'>
                        <p className='post-creator'>{props.creator}</p>
                        <p className='post-time'>{moment.utc(props.createdAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
        // <Card
        //     style={{
        //         width: 300,
        //         marginTop: 16,
        //     }}
        //     actions={[
        //         <LikeOutlined key="setting" />,
        //         <EditOutlined key="edit" />,
        //     ]}
        // >
        //     <Skeleton loading={loading} avatar active>
        //         <Meta
        //             avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        //             title="Title"
        //             description="This is the message."
        //         />
        //     </Skeleton>
        // </Card>
    )
}

export default Post
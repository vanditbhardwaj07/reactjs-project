import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
       


    function RenderComments({comments}) {

        const commentsOnDish = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {commentsOnDish}
                </ul>

            </div>
        )
    }

    const Dishdetails = (props) => {

        console.log('dish detail component render invoked')

        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }

        const dishItem = <RenderDish dish={props.dish} />
        const commentItem = <RenderComments comments={props.dish.comments} />

        return (
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
        )
    }


export default Dishdetails

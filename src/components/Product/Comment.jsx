import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import { Button } from 'react-bootstrap'

export default function Comment({ allComments, handleAddComment, setComment }) {
    return (
        <MDBContainer className="mt-5" style={{
            width: '100%',
            marginLeft: '30rem',
            marginTop: '-4rem',
}}>
            <MDBRow className="justify-content-center">
                <MDBCol md="8" lg="6">
                    <MDBCard
                        className="shadow-0 border"
                        style={{ backgroundColor: "#f0f2f5" }}
                    >
                        <MDBCardBody>
                            <MDBInput wrapperClass="mb-4" placeholder="Type comment..." onChange={(e) => {
                                setComment(e.target.value)
                            }}/>
                            <Button
                                variant="outline-dark"
                                style={{
                                    margin: ' 0 1rem 1rem 0 '
                                }} onClick={handleAddComment} >add comment</Button>
                            <MDBCard className="mb-4" style={{
                                maxHeight: '300px',
                                overflow: 'scroll',
                            }}>
                                {allComments ? allComments.map((e) => {
                                    return (
                                <MDBCardBody>
                                            <p>{e.comment}</p>
                                            <hr/>
                                </MDBCardBody>
                                    )
                                })
                                : null}
                            </MDBCard>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
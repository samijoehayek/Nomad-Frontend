import {Button, Col, Container, Row} from "react-bootstrap";
import NFTPoster from "../../components/NFTPoster";
import "./styles.scss";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import Footer from "../../components/Footer";
import ConnectButtonWallet from "../../components/ConnectWalletButton";

const MintingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={{span: 12, order:1}} lg={{span:6, order:1}} className="nftPosterCol">
                        <NFTPoster />
                    </Col>
                    <Col xs={{span:12, order:2}} lg={{span:6, order:2}} className="mintingPagePositioning justify-content-center align-items-center">
                        <p className="mintingPageTitleStyle">mint ur nft</p>
                        <br/>
                        <h1 className="mintingPageSubTitleStyle">invaluable presence</h1>
                        <p className="mintingPageParagraphStyle">
                            Did you see this coming? I didn't. We smirked to ephemeral obsessions and lust.
                            Yet, there's so much to give and so much more to know.
                        </p>
                        <br/>
                        <Container className="containerButtons">
                            <Row>
                                <Col className="d-flex justify-content-end columnPositioning1">
                                    <Button variant="secondary" size="lg" className="nomadMintingPagePriceButton">Price</Button>
                                </Col>
                                <Col className="columnPositioning2">
                                    <Button variant="secondary" size="lg" className="nomadMintingPageAvailableButton">Available</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-end columnPositioning1">
                                    <Button variant="secondary" size="lg" className="nomadMintingPageTitleButton">Title</Button>
                                </Col>
                                <Col className="columnPositioning2">
                                    <Button variant="secondary" size="lg" className="nomadMintingPageTitle2Button">Title</Button>
                                </Col>
                            </Row>
                        </Container>
                        <ConnectButtonWallet />
                        {/*<Button variant="light" className="rounded-0 connectWalletBtn">connect wallet <AiOutlineArrowRight /></Button>*/}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default MintingPage;
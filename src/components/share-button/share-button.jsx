import { useState } from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';
import {
    EmailIcon,
    FacebookIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';
import { Container, Button, Link } from 'react-floating-action-button';

import './share-button.css';

const generateButtonList = () => {
    let btnList = [
        <WhatsappShareButton url="https://reactjs.org/" title="Check out React">
            <WhatsappIcon size={45} round={true} />
        </WhatsappShareButton>,
        <TwitterShareButton url="https://reactjs.org/" title="Check out React">
            <TwitterIcon size={45} round={true} />
        </TwitterShareButton>,
        <EmailShareButton url="https://reactjs.org/" title="Check out React">
            <EmailIcon size={45} round={true} />
        </EmailShareButton>,
        <FacebookShareButton url="https://reactjs.org/" title="Check out React">
            <FacebookIcon size={45} round={true} />
        </FacebookShareButton>,
        <HatenaShareButton url="https://reactjs.org/" title="Check out React">
            <HatenaIcon size={45} round={true} />
        </HatenaShareButton>,
        <InstapaperShareButton url="https://reactjs.org/" title="Check out React">
            <InstapaperIcon size={45} round={true} />
        </InstapaperShareButton>,
        <LineShareButton url="https://reactjs.org/" title="Check out React">
            <LineIcon size={45} round={true} />
        </LineShareButton>,
        <LinkedinShareButton url="https://reactjs.org/" title="Check out React">
            <LinkedinIcon size={45} round={true} />
        </LinkedinShareButton>,
        <LivejournalShareButton url="https://reactjs.org/" title="Check out React">
            <LivejournalIcon size={45} round={true} />
        </LivejournalShareButton>,
        <MailruShareButton url="https://reactjs.org/" title="Check out React">
            <MailruIcon size={45} round={true} />
        </MailruShareButton>,
        <OKShareButton url="https://reactjs.org/" title="Check out React">
            <OKIcon size={45} round={true} />
        </OKShareButton>,
        <PinterestShareButton url="https://reactjs.org/" title="Check out React">
            <PinterestIcon size={45} round={true} />
        </PinterestShareButton>,
        <PocketShareButton url="https://reactjs.org/" title="Check out React">
            <PocketIcon size={45} round={true} />
        </PocketShareButton>,
        <RedditShareButton url="https://reactjs.org/" title="Check out React">
            <RedditIcon size={45} round={true} />
        </RedditShareButton>,
        <TelegramShareButton url="https://reactjs.org/" title="Check out React">
            <TelegramIcon size={45} round={true} />
        </TelegramShareButton>,
        <TumblrShareButton url="https://reactjs.org/" title="Check out React">
            <TumblrIcon size={45} round={true} />
        </TumblrShareButton>,
    ];
    return btnList;
};

const ShareButtons = () => {
    const [open, setOpen] = useState(false);
    const [usedBtns, setUsedBtns] = useState(generateButtonList().slice(0, 4));
    const [unUsedBtns, setUnUsedBtns] = useState(generateButtonList().slice(4));

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleAdd = (e) => {
        const idx = e.target.tabIndex;
        e.stopPropagation();
        setUsedBtns([...usedBtns, unUsedBtns[idx]]);
        const tmp = [...unUsedBtns];
        tmp.splice(idx, 1);
        setUnUsedBtns(tmp);
    }

    const handleRemove = (e) => {
        const idx = e.target.tabIndex;
        e.stopPropagation();
        setUnUsedBtns([...unUsedBtns, usedBtns[idx]]);
        const tmp = [...usedBtns];
        tmp.splice(idx, 1);
        setUsedBtns(tmp);
    }

    return (
        <>
            <Container>
                <Link
                    className="add-btn"
                    tooltip="Add options"
                    icon="fas fa-plus add-icon"
                >
                    <button
                        className="modal-button"
                        onClick={toggleOpen}
                    ></button>
                </Link>
                {usedBtns.map((btn, i) => (
                    <Link key={i} className="share-link">{btn} <span tabIndex={i} className='remove-option' onClick={handleRemove}>x</span> </Link>
                ))}
                <Button
                    className="share-button"
                    tooltip="Share"
                    icon="fas fa-share share-icon"
                    rotate={true}
                />
            </Container>
            {open && (
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-wrapper">
                            <button
                                className="modal-close-btn"
                                onClick={toggleOpen}
                            >
                                <i className="fas fa-close"></i>
                            </button>
                            <h2>More sharing options...</h2>
                            {unUsedBtns.map((btn, i) => (
                                <span className='btn-overlay' tabIndex={i} key={i} onClick={handleAdd}>{btn}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShareButtons;

import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from 'semantic-ui-react';

export default function NewMeetingNotification({ meeting }) {
    const [aCopy, setA] = useState(false);
    const [bCopy, setB] = useState(false);

    useEffect(() => {
        setA(false);
        setB(false);
    }, []);

    const styles = {
        p: { color: 'darkmagenta', fontWeight: 'bold', fontSize: 16 },
        span: { color: '#666', cursor: 'pointer' },
        span2: { color: '#666', cursor: 'none' },
    };

    return (
        <div>
            <p style={styles.p}>
                Trainer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={styles.span}>
                    {meeting.trainer.user.name} ({meeting.trainer.user.email})
                </span>
            </p>
            <p style={styles.p}>
                Topic:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={styles.span}>{meeting.topic}</span>
            </p>
            <p style={styles.p}>
                Agenda:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={styles.span}>{meeting.agenda}</span>
            </p>
            <p style={styles.p}>
                Meeting ID:{' '}
                <CopyToClipboard text={meeting.meetingId} onCopy={() => setA(true)}>
                    <span style={styles.span}>
                        {meeting.meetingId}&nbsp;
                        <Icon name="copy outline" />
                    </span>
                </CopyToClipboard>
                <span style={styles.span2}>{aCopy ? '(copied)' : ''}</span>
            </p>
            <p style={styles.p}>
                Meeting password:{' '}
                <CopyToClipboard text={meeting.password} onCopy={() => setB(true)}>
                    <span style={styles.span}>
                        {meeting.password}&nbsp;
                        <Icon name="copy outline" />
                    </span>
                </CopyToClipboard>
                <span style={styles.span2}>{bCopy ? '(copied)' : ''}</span>
            </p>
        </div>
    );
}

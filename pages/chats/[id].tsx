import { NextPage } from "next";
import Input from "../../components/input";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail: NextPage = () => {
    return (
        <Layout canGoBack title="Steve">
            <div className="py-4 pb-16 px-4 space-y-4">
                <Message message="Hello World" />
                <Message message="dlroW olleH" reversed />
                <Message message="This is NextJS" />
                <Input kind="chat" />
            </div>
        </Layout>
    );
}

export default ChatDetail;
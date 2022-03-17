import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
    return (
        <Layout canGoBack title="Go Live">
            <form className="px-4 py-2 space-y-2">
                <Input
                    label="Name"
                    name="name"
                    type="text"
                    kind="text"
                    required
                />
                <Input
                    label="Price"
                    name="price"
                    type="text"
                    kind="price"
                    placeholder="0.00"
                    required
                />
                <TextArea
                    name="Descript"
                    label="Descript"
                />
                <Button text="Go Live" />
            </form>
        </Layout>
    )
}

export default Create;
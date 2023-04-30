import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: "a1",
            label: "Can I use React on a project?",
            content: "You need to have at least Node version 10. Next, you need to have the node package manager (npm). It gets automatically installed on your PC with Node. The npm version needs to be 5.2 or higher."
        },
        {
            id: "a2",
            label: "Can I use Javascript on project?",
            content: "js makes responsive design easier. JavaScript has become integral to the Internet experience as developers build increased interaction and complexity into their applications. Search engines, ecommerce, content management systems, responsive design, social media and phone apps would not be possible without it."
        },
        {
            id: "a3",
            label: "Can I use CSS on a project?",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        }
    ]

    return <Accordion items={items} />
};

export default AccordionPage;
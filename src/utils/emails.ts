export type EmailDataProps = (typeof EMAILS)[0]

export const EMAILS = [
    {
        id: "1",
        name: "Joana Silva",
        avatar: "https://mighty.tools/mockmind-api/content/human/78.jpg",
        marker: "important",
        subject: "What is Lorem Ipsum?",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        star: false,
        date: "12 de fev."
    },
    {
        id: "2",
        name: "Pedro Henrique",
        avatar: "https://mighty.tools/mockmind-api/content/human/75.jpg",
        subject: "Where does it come from?",
        message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        star: true,
        date: "13 de fev."
    },
    {
        id: "3",
        name: "Ana Luiza",
        avatar: "https://mighty.tools/mockmind-api/content/human/69.jpg",
        subject: "Why do we use it?",
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        star: false,
        date: "13 de fev."
    }
]
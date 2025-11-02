const ContactMe = () => {
    return <div className="flex justify-center my-8">
        <a
            id="mail-link" href="mailto:leonn09@gmail.com"
            className="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-zinc-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
            >
            leonn09@gmail.com
            <span className="text-zinc-300/85"> - email me!</span>
        </a>
    </div>
}

export default ContactMe;
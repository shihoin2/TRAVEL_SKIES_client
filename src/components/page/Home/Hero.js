const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto content-center place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        TRAVEL SKIES
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                        日本全国の主要都市の1週間の天気や気温を確認でき、
                        <br />
                        旅行計画や持ち物の準備をサポートします。
                    </p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="size-60" src="/Logo_rem.png" alt="Logo" />
                </div>
            </div>
        </section>
    )
}

export default Hero

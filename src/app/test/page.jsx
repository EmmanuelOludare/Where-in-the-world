'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
    const [showSmallInfo, setShowSmallInfo] = useState(false);

    const handleScroll = () => {
        const profileComponent = document.getElementById('profileComponent');
        if (profileComponent) {
            const componentRect = profileComponent.getBoundingClientRect();
            setShowSmallInfo(componentRect.bottom < 0);
        }
    };

    // Attach the handleScroll function to the window scroll event
    // You can use useEffect here for cleanup too.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <div id="profileComponent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus autem dignissimos aperiam quis omnis assumenda, repudiandae expedita velit error aut saepe itaque, provident voluptatem ullam quibusdam, cumque laborum tempora.
                Ullam minima suscipit nihil eaque hic, voluptate neque similique reprehenderit eum officiis et magni facere corporis iure ex rem ad, impedit a eveniet ab. Nostrum debitis consequatur repudiandae ipsam adipisci.
                Commodi similique aperiam, repudiandae autem, vero nam et temporibus sed voluptates corrupti id vel architecto dolores natus? Sapiente expedita, rem accusantium doloremque nisi quae fugit fuga saepe facilis! Harum, alias!
                Voluptates excepturi odit natus consequatur labore! Doloribus saepe, dignissimos non, earum optio molestias sequi omnis rerum amet, perferendis molestiae repellendus beatae corrupti reprehenderit ea eos quae iure quisquam? Repellat, eveniet.
                Vitae consectetur corporis facere, labore quibusdam, eligendi perferendis ab, ad harum est necessitatibus explicabo asperiores autem quod ducimus similique molestias alias id ullam fugit dolores voluptas voluptatum reprehenderit. Voluptatum, nostrum?
            </div>
            <div className='mt-10'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, ullam, fuga tenetur ipsum fugit repellendus harum impedit cupiditate quis eius a officia temporibus aliquid soluta modi! Adipisci laborum molestias odio.
                Veniam reprehenderit odio delectus hic voluptate. Eligendi, quidem ducimus dolore asperiores temporibus beatae. Eum fuga amet ipsam assumenda architecto sapiente magni necessitatibus eveniet aliquid. Tenetur repellendus quis ipsam ea esse.
                Doloribus labore pariatur eum autem atque nihil repellendus tempora sint natus dolore soluta itaque assumenda facere consectetur, unde molestias doloremque nemo. Iste, nobis! Eum eligendi eos, excepturi eaque sequi rem!
                Obcaecati eum voluptatibus architecto nesciunt id, quos, totam aliquam laborum repellendus vitae excepturi in placeat odit dignissimos! Beatae porro nostrum, sequi eos ipsam alias consectetur dignissimos doloremque debitis nihil sunt.
                Temporibus ut sapiente recusandae! Soluta quisquam necessitatibus maxime libero deleniti sint ducimus molestiae, alias consectetur nihil, exercitationem ab omnis minima eaque beatae et accusantium animi neque quae aliquid consequuntur aliquam.
                Possimus, aliquam rerum. Aliquam illo consequatur minima provident recusandae, assumenda est voluptates iure. Asperiores recusandae, cumque voluptatum odio alias reiciendis tenetur animi molestias eum, tempore veniam porro non excepturi accusamus.
                Deserunt aperiam rem sit, quos quia voluptatum? Quos ipsa non possimus harum ex quidem perspiciatis, repudiandae, consectetur ipsam veniam fuga commodi tenetur? Minima impedit beatae nobis earum facere quod ea!
                Id consequatur quae, esse velit, ea reiciendis eius architecto ut neque adipisci explicabo tenetur, officiis provident pariatur? Alias, sequi iusto libero aperiam quas ullam eveniet quod itaque! Possimus, iste sed!
                Soluta nesciunt, incidunt dicta nobis ex asperiores? Cumque veritatis eaque dolorem amet. Voluptatum dolorum distinctio est enim nostrum quasi consectetur tempore harum fuga, nemo saepe, voluptatem, quam reprehenderit voluptatibus rerum?
                Asperiores, eligendi? Expedita itaque natus atque tempora sequi beatae ducimus, impedit facilis voluptate fuga possimus ex nobis vitae, distinctio dolore molestias tempore, accusantium tenetur. Beatae quisquam culpa et ipsa modi.
                Similique ipsa perferendis quam provident vel labore voluptates accusantium molestias eos delectus, dolorum rem molestiae accusamus assumenda, cupiditate ipsum blanditiis doloribus numquam aliquam aperiam quos explicabo harum sint quo. Fugit!
                Optio animi eius, ratione accusamus neque exercitationem, illum in quam labore veniam, iste maxime quos atque dolor unde voluptatibus deserunt sit consequatur dolorum molestiae cupiditate aperiam. Quasi ipsam laudantium architecto.
                Enim expedita odit neque obcaecati, provident voluptate exercitationem dolores totam alias facere ipsam fugit nemo inventore deleniti quasi quisquam atque dolorum vel corporis. Ea cupiditate a excepturi non nostrum! Sequi.
                Ipsa amet autem sequi ducimus culpa illo qui doloremque, iste veniam, earum aperiam, commodi adipisci natus velit quam delectus ut alias cumque corporis! Exercitationem est harum illo dolorum mollitia dolorem!
                Iusto sit in sequi, eligendi non minima quae doloribus enim, aperiam laboriosam facilis fuga veritatis tempora? Temporibus rem sed esse adipisci repudiandae sunt similique nulla. Dolorem temporibus similique saepe facilis?
                Similique saepe vitae explicabo accusamus? Placeat ab itaque pariatur corporis, inventore rerum, et commodi nam fugit similique eligendi accusantium odio accusamus libero molestiae animi sit fuga consequuntur ratione possimus incidunt?
                Hic eveniet asperiores consectetur architecto vel repellendus nesciunt alias nulla natus sint, consequatur minus officiis blanditiis, fugit ut eligendi id dignissimos reprehenderit sapiente quasi similique eius illo atque voluptates. Suscipit.
                Odit officia repudiandae molestiae enim dolores eveniet ipsum, magni odio veritatis ipsam facere, possimus ea? Quos provident, ad deleniti mollitia ex, amet molestiae quasi esse facilis doloribus impedit vero reprehenderit?
                Cum tempore laborum rem numquam vel molestiae earum delectus non explicabo fugit quis dolorem quas adipisci, ea ducimus quisquam esse, sint maxime deserunt? Aperiam nulla eligendi quas fugiat eum ad!
                Non nobis eum labore numquam corporis. Dolorum quisquam sequi natus. Adipisci unde nisi placeat omnis vero sint voluptas blanditiis enim, repellendus consequatur suscipit architecto quibusdam reiciendis magni sit ipsa! Aut.
                Tenetur, voluptatem itaque quia quis impedit corrupti soluta fugit cupiditate. Accusamus numquam, natus dolorum saepe tempora voluptatibus praesentium explicabo laudantium sequi repellendus vel excepturi, quia ex! Aspernatur, sequi magni? Magnam?
                Cumque accusantium dicta voluptatem repudiandae iusto necessitatibus voluptas quibusdam rerum non velit. Illo fuga consequuntur earum a porro reprehenderit voluptate debitis aliquam, atque recusandae? Soluta architecto vitae a ratione placeat!
                Deserunt rem aut laborum ipsam necessitatibus. Vel odio, optio consectetur inventore ut, necessitatibus molestias repudiandae ab, modi a debitis dolorem ratione voluptatibus voluptas numquam veniam maiores ducimus nostrum asperiores praesentium.
                Saepe nostrum facere, soluta iste itaque sequi dicta aut ipsam tempore nemo consequatur laborum expedita praesentium quisquam aliquam architecto ullam fugit. Sequi, ipsum? Autem laborum quod vel aut, ipsum molestiae.
                Ab sapiente, saepe architecto suscipit quod corrupti maiores ex perspiciatis blanditiis, velit, animi consequuntur ad nostrum explicabo esse eius et doloribus reiciendis impedit libero. Sed, dignissimos! Blanditiis eum labore provident!
                Tempora, labore harum, quos nobis est laudantium sequi praesentium adipisci in provident, placeat voluptates molestiae illum minima numquam iusto. Itaque tempora saepe ab fugiat, molestias animi dicta quisquam et corrupti.
                Repellendus eaque facere possimus provident, vero porro velit. Itaque velit architecto delectus voluptates vel sint deleniti cupiditate pariatur nesciunt minima illum, cumque amet eius debitis! Deleniti itaque ipsum minima aliquid?
                Labore ratione recusandae quisquam? Ipsum a excepturi ad quidem labore tenetur, officia eligendi dolore eos vitae impedit dicta quisquam qui aliquam! Molestias doloribus totam aperiam dolore, enim tenetur quisquam sit.
                Laborum quod tempore mollitia quaerat consequatur omnis alias id necessitatibus eum. Harum, perspiciatis? Adipisci minus iusto minima qui illo sunt delectus, in vero sed reprehenderit exercitationem nisi eius laboriosam quasi?
                Similique deleniti reiciendis assumenda perspiciatis id possimus dolore mollitia dolor! Numquam explicabo officia temporibus odio commodi assumenda voluptatibus, consequatur iusto quas ex cum ipsam rem delectus nobis harum nemo debitis.
                Quis fugiat soluta blanditiis id, distinctio aliquam incidunt, maxime voluptatum veniam est facilis. Quisquam debitis, tempore iste eveniet exercitationem, architecto odio quas non dolorum quam, officiis soluta beatae aliquid. Laboriosam?
                Quia rem debitis ab ea quaerat sit doloremque officia accusantium adipisci, excepturi assumenda ratione iure officiis, explicabo qui minus quae aliquam culpa perferendis dicta eveniet eos itaque iusto! Id, nam.
                Autem nihil nesciunt vitae numquam commodi nobis? Excepturi ipsam ad ullam. Expedita inventore facere, quod excepturi similique minima voluptatibus cupiditate commodi, accusantium cum tempora, sit vitae animi aut corporis recusandae.
                Alias consequatur repudiandae, aliquid qui molestiae dolorem sequi. Dicta quae corporis consectetur neque officia veniam voluptatem, odit quam voluptates tempore! Quis necessitatibus iste odit delectus distinctio expedita tenetur eos ut.
                Deserunt voluptate placeat ullam dolorem iure sint in quia minus neque suscipit! Fugiat, odit excepturi? Excepturi, dolore nisi sequi voluptatibus atque, fuga repellendus non eligendi veritatis dolores repellat perferendis molestiae.
                Nihil recusandae debitis veniam inventore ex velit repudiandae commodi odit in beatae, perspiciatis voluptates assumenda, cumque nam rem, officiis eius ab eveniet atque earum dignissimos. Ex quasi in perspiciatis eum.
                Non voluptate laudantium eaque dolore quam perferendis consequatur ad? Pariatur omnis aspernatur nulla? Quae eveniet odio atque odit architecto nulla tempora sed commodi minima. Consequuntur libero autem nesciunt consectetur laborum.
                Quia voluptates expedita exercitationem quibusdam aliquam, corrupti, eum, quasi dolorem accusamus deleniti quisquam delectus distinctio illum alias quam in voluptas maxime enim ea impedit non aliquid perferendis. Quam, nemo non?
                Voluptates dicta reiciendis quia sit non dolor ex harum doloribus vero tempora ab, itaque eos, ipsum aliquid omnis nesciunt cupiditate asperiores error amet fuga quas labore earum! Necessitatibus, quisquam id.
                Iste vitae deleniti exercitationem, id obcaecati quae fugiat alias molestiae at beatae aliquid perferendis atque quia sapiente delectus commodi cum magnam dolorem optio odio. Inventore dolorem harum molestias itaque repellendus!
                Minima, inventore. Recusandae iusto placeat rerum est ex esse quia ullam quam natus minus aut magni quasi vel laudantium fugiat, eius sed quas officia voluptatibus, modi fuga ratione reiciendis! Nulla?
                Labore est provident ipsum dolor totam porro voluptatem vel, blanditiis quisquam dolore minus, fugiat excepturi doloremque iure eum at maiores quod vitae nihil consectetur ratione officia, exercitationem cum inventore! Harum?
                Modi laudantium nam architecto recusandae iusto tenetur aliquam quisquam exercitationem omnis tempore! Ducimus sint saepe nesciunt quas optio expedita, officia ipsa totam? Sunt recusandae quaerat maxime dolore expedita et? Fugiat.
                Neque, ullam itaque illum et quos aperiam aspernatur eum quisquam impedit provident maiores deserunt exercitationem nesciunt officiis perspiciatis voluptates necessitatibus sequi excepturi quod voluptate esse doloribus distinctio quaerat! Molestias, quis?
                Numquam fugiat maxime repudiandae debitis libero? Expedita fuga quidem possimus nesciunt omnis ad maiores dicta ipsa voluptate tempora placeat ipsum laudantium minima voluptas repellendus aperiam repudiandae fugiat, esse praesentium eligendi?
                Sequi facere, natus molestiae ratione pariatur dolore, aperiam animi blanditiis aut veritatis possimus modi corporis labore dolores. Labore velit sequi qui, commodi accusantium officiis eligendi laborum, est soluta porro consequatur?
                Laborum adipisci eos accusantium ea dicta voluptatum ex, unde repellat perferendis nisi repudiandae, aut aliquam nostrum illo ut at! Corrupti, omnis? Omnis dolorum amet illo qui accusantium sunt excepturi laborum?
                Expedita quos iure magni placeat! Harum facere officiis repellendus eaque nemo nihil, voluptatem laborum ratione voluptatibus veritatis modi a et sit iusto ipsum voluptate, fuga eum sapiente consectetur! Fugit, cum.
                Recusandae accusantium natus rerum deleniti tempora dolorum temporibus aperiam consectetur error, sunt officia exercitationem impedit excepturi doloribus voluptatem illo nobis aliquid dolorem officiis? Amet cupiditate nobis deleniti hic aut? Dolorem!
                Vero quisquam reiciendis voluptate, eligendi perspiciatis laborum minima! Quo deleniti quis magnam debitis placeat deserunt quaerat dolor reprehenderit similique. Sint pariatur reiciendis ducimus, assumenda exercitationem expedita totam et maxime ea.
            </div>

            <motion.div
                className="fixed top-2 opacity-20 w-full right-5 p-3 bg-white border-solid border-1 text-black border-[#e1e1e1] shadow-md rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showSmallInfo ? 1 : 0, y: showSmallInfo ? 0 : 20 }}
                transition={{ duration: 0.3 }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.div>
        </div >
    );
};

export default ProfilePage;

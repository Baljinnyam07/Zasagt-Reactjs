import { useState } from "react";
import { Link } from "react-router-dom";

function AdminNav(){
    const [dropdowns, setDropdowns] = useState([
        {
          title: 'Мэдээ',
          isOpen: false,
          items: [
            { title: 'ЦАГ ҮЕИЙН МЭДЭЭЛЭЛ', url: '/admin/posts/news' },
            { title: 'БАЙГУУЛЛАГЫН МЭДЭЭ', url: '/admin/posts/corp-news' },
            { title: 'НИЙГМИЙН ХАРИУЦЛАГА', url: '/admin/posts/social-resp' }
          ]
        },
        {
          title: 'Хамтран ажиллах',
          isOpen: false,
          items: [
            { title: 'ИЛ УУРХАЙН ХӨРС ХУУЛАЛТ, ОЛБОРЛОЛТЫН АЖИЛ', url: '/admin/mechanical/mining' },
            { title: 'УУЛ УУРХАЙН ТУСЛАХ АЖИЛ', url: '/admin/mechanical/openings' },
            { title: 'ТОНОГ ТӨХӨӨРӨМЖ ТҮРЭЭС', url: '/admin/mechanical/rent' }
          ]
        },
        {
          title: 'Хүний Нөөц',
          isOpen: false,
          items: [
            { title: 'НЭЭЛТТЭЙ АЖЛЫН БАЙР', url: '/admin/humanity/hire' }
          ]
        }
      ]);
    
      const toggleDropdown = (index) => {
        const updatedDropdowns = dropdowns.map((dropdown, i) => ({
          ...dropdown,
          isOpen: index === i ? !dropdown.isOpen : false // Toggle clicked dropdown, close others
        }));
        setDropdowns(updatedDropdowns);
      };
    

    return(
        <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6">
          <li>
            <Link className="hover:underline" to="/admin">
              Dashboard
            </Link>
          </li>
          {dropdowns.map((dropdown, index) => (
            <li key={index} className="relative group">
              <span
                className="hover:underline cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                {dropdown.title}
              </span>
              {dropdown.isOpen && (
                <ul className="absolute space-y-1 bg-gray-800 text-gray-300 p-2 mt-2 rounded shadow-lg">
                  {dropdown.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        className="hover:bg-blue-500 w-max hover:text-white block px-2 py-1"
                        href={item.url}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link className="hover:underline" to="/admin/feedbacks/feedback">
              Feedback
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default AdminNav
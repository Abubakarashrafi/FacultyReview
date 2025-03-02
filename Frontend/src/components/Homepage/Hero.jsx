import { useState, useMemo, useRef, useEffect } from "react";
import Search from "../../assets/search.png";
import DropDown from "../../assets/dropdown.png";
import CardList from "./CardList";

const teachersData = [
  { id: 1, name: "Muhammad Izhan Waheed", department: "Computer Science", course: "CSC 2201 Data Structures & Algorithms", rating: 4.8 },
  { id: 2, name: "Prof. Robert Williams", department: "Computer Science", course: "CSC 2202 Data Structures & Algorithms", rating: 4.5 },
  { id: 3, name: "Ms. Emily Chen", department: "Psychology", course: "CSC 1561 Psychology", rating: 4.9 },
  { id: 4, name: "Dr. Marcus Brown", department: "Electrical Engineering", course: "CSC 2501 Flip Flops", rating: 4.3 },
  { id: 5, name: "Prof. Jennifer Lee", department: "Mechatronics", course: "CSC 2201 DLD", rating: 4.6 },
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const dropdownRef = useRef(null);

  const handleSearchTerm = (e) => {
    const value = e.target.value.trim();
    setSearchTerm(value);

    // Filter only if there's a valid input
    if (value === "") {
      setFilteredTeachers([]); // Clear results when input is empty
      setIsDropdownOpen(false);
      return;
    }

    const filtered = teachersData.filter(
      (teacher) =>
        teacher.name.toLowerCase().includes(value.toLowerCase()) ||
        teacher.course.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredTeachers(filtered);
    setIsDropdownOpen(filtered.length > 0); // Open dropdown only if there are matches
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsDropdownOpen(false);
    }
  };

  const sortedTeachers = useMemo(() => {
    return [...filteredTeachers].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [filteredTeachers, sortBy]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center w-full mt-14">
        {/* Header */}
        <h6 className="text-white text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center pt-4 tracking-wide px-4">
          Real Talk Real Reviews
        </h6>
        <h3 className="text-white text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium text-center italic px-4">
          Rate, review, and explore – your academic journey starts here!
        </h3>

        {/* Search Input */}
        <div className="relative w-full sm:w-[80%] md:w-[43rem] mt-8 sm:mt-12 md:mt-16" ref={dropdownRef}>
          <input
            value={searchTerm}
            type="text"
            placeholder="Search faculty by name or course"
            className="w-full p-4 sm:p-5 pl-16 sm:pl-20 pr-12 rounded-full font-medium text-white bg-[#7c7ad2] focus:outline-none placeholder-white placeholder-opacity-80"
            onChange={handleSearchTerm}
            onKeyDown={handleKeyDown}
          />
          <img src={Search} alt="searchIcon" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 sm:w-7" />
          <img
            src={DropDown}
            alt="dropdownIcon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 sm:w-7 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {/* Dropdown Suggestions */}
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
              {sortedTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(teacher.course);
                    setFilteredTeachers([teacher]);
                    setIsDropdownOpen(false);
                  }}
                >
                  {teacher.name} - {teacher.course}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sorting Buttons */}
        <div className="mt-4 flex gap-4">
          <button className="bg-[#7c7ad2] hover:bg-[#585796] text-white px-4 py-2 rounded-lg transition-all duration-300" onClick={() => setSortBy("name")}>
            Sort by Name
          </button>
          <button className="bg-[#7c7ad2] hover:bg-[#585796] text-white px-4 py-2 rounded-lg transition-all duration-300" onClick={() => setSortBy("rating")}>
            Sort by Rating
          </button>
        </div>

        {/* Display Cards Only if Input is Not Empty */}
        {searchTerm !== "" && filteredTeachers.length > 0 && <CardList teachers={sortedTeachers} />}
      </div>

      {/* Footer (Fixed at Bottom) */}
      <footer className="mt-7 w-full py-4 bg-[#a3b4dc] tracking-wider text-white text-center">
        Copyright  &copy; ZABCourse
      </footer>
    </section>
  );
};

export default Hero;

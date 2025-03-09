import Image from "next/image";
import { useState } from "react";
import vectorResearch from "../../assets/icons/vector-research.png";
import jobsData from "@/utils/jobsData";

const JobList = () => {
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedRecent, setSelectedRecent] = useState("all");

  // Industries dropdown options
  const industries = ["all", "business", "tech", "design", "marketing"];
  // Recent dropdown options
  const recentOptions = ["all", "7 days", "15 days", "30 days"];

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "all" || job.industry.toLowerCase() === selectedIndustry;

    const matchesRecent =
      selectedRecent === "all" ||
      (selectedRecent === "7 days" &&
        new Date(job.postedAt) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (selectedRecent === "15 days" &&
        new Date(job.postedAt) >= new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)) ||
      (selectedRecent === "30 days" &&
        new Date(job.postedAt) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

    return matchesSearch && matchesIndustry && matchesRecent;
  });

  return (
    <section className="container">
      <div className="p-4">
        {/* Search Input */}
        <div className="flex justify-between items-center">
          <div className="relative w-fit">
            <Image
              src={vectorResearch}
              alt="search icon"
              className="absolute left-3 top-[22px] transform -translate-y-1/2 text-gray-400 w-4 h-4"
              size={18}
            />
            <input
              type="search"
              placeholder="Search Jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 pl-10 border mb-3 w-fit rounded-40"
            />
          </div>

          {/* Industry Dropdown */}
          <select
            className="px-4 py-2 border rounded"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </option>
            ))}
          </select>

          {/* Recent Dropdown */}
          <select
            className="px-4 py-2 border rounded"
            value={selectedRecent}
            onChange={(e) => setSelectedRecent(e.target.value)}
          >
            {recentOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border flex justify-between flex-col rounded-40 bg-white px-6 py-10 border-[#0000001A]"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-archivo font-semibold">
                      {job.title}
                    </h2>
                    <div className="bg-[#B6D2D5] px-2 py-1 rounded text-xs font-semibold leading-normal">
                      {job.noOfApplied} Applied
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <p className="text-sm font-archivo">
                      <span className="text-primary">Experience:</span> {job.experience} years
                    </p>
                    <p className="text-sm font-archivo">
                      <span className="text-primary">Location:</span> {job.location}
                    </p>
                    <p className="text-sm font-archivo">
                      <span className="text-primary">Type:</span> {job.jobType}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-karla leading-10">{job.jobDes}</p>
                  <p className="text-base py-5 ">
                    <span className="font-bold">Skills:</span> {job.skills}
                  </p>
                </div>
                <button className="btn-primary w-full rounded-40">APPLY NOW</button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">No jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobList;

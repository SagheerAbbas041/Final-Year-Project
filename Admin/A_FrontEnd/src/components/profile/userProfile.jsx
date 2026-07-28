import React from 'react';

export const ProfilePage = () => {
  return (
    <section className="bg-gray-100  py-3 ml-20 mt-14">
      <div className="container mx-auto px-4" >
        <div className="flex flex-wrap">

          {/* Left Column */}
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0">

            {/* User Profile Card */}
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="mx-auto rounded-full w-36 h-36 mb-4" />
              <p className="text-gray-500 text-center mb-1">Muhammad Wajid Hussain</p>
              <p className="text-gray-500 text-center mb-4">Mandibhauddin,Pakistan</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 text-white rounded px-4 py-2 hover:text-custom-blue">Follow</button>
                <button className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:text-custom-blue">Message</button>
              </div>
            </div>

            {/* Links List */}
            <div className="bg-white shadow rounded-lg">
              {/* Note: Replace placeholders with real icons and links */}
              <div className="flex justify-between items-center p-3 border-b">
                <span className="text-warning">[Instagram_Icon]</span>
                <p className="text-gray-600">https://waji.com</p>
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <span className="text-warning">[Facebook_Icon]</span>
                <p className="text-gray-600">https://waji.com</p>
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <span className="text-warning">[LinkIn_Icon]</span>
                <p className="text-gray-600">https://waji.com</p>
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <span className="text-warning">[GitHub_Icon]</span>
                <p className="text-gray-600">https://waji.com</p>
              </div>
              {/* ... Repeat for other links ... */}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 w-full pl-6">

            {/* User Details Card */}
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4">
                <p className="text-gray-600">Full Name:</p>
                <p className="col-span-2 text-gray-400">M.Wajid Hussain</p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4">
                <p className="text-gray-600">Father Name:</p>
                <p className="col-span-2 text-gray-400">Ijaz Ahmad</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4">
                <p className="text-gray-600">Roll Number:</p>
                <p className="col-span-2 text-gray-400">21021519-089</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4">
                <p className="text-gray-600">Department:</p>
                <p className="col-span-2 text-gray-400">Computer Science</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4">
                <p className="text-gray-600">Semester:</p>
                <p className="col-span-2 text-gray-400">Seventh</p>
              </div>
              
              {/* ... Repeat for other details ... */}
            </div>

            {/* Progress Bars */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-blue-500 italic mb-4">Assignment Project Status</p>
                {/* Progress for Web Design */}
                <p className="text-sm text-gray-600 mb-2">Project Idea</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Project Proposal</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Project First Phase</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
             
                
                {/* ... Repeat for other progress bars ... */}
              </div>
              {/* Repeat same block for the second progress section */}
              <div className="bg-white shadow rounded-lg p-6">
                <p className="text-blue-500 italic mb-4">Assigment Project Status</p>
                {/* Progress for Web Design */}
                <p className="text-sm text-gray-600 mb-2">Project Second Phase</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Project Third Phase</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Web Design</p>
                <div className="rounded bg-gray-200 h-2 mb-4">
                  <div className="bg-blue-500 w-4/5 h-2 rounded"></div>
                </div>
              
                
                {/* ... Repeat for other progress bars ... */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

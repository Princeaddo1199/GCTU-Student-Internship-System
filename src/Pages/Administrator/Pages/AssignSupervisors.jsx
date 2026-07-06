import React, { useState } from "react";
import "../STYLES/AssignSupervisors.css";
import "../../AcademicSupervisor/STYLES/Sidebar.css";
import {
  GraduationCap,
  CheckCircle,
  Users,
  Search,
  UserPlus,
} from "lucide-react";

const initialUnassigned = [
  {
    id: "STU005",
    name: "Akua Boateng",
    department: "Computer Science",
    company: "TechCorp Ghana",
  },
  {
    id: "STU007",
    name: "Yaw Mensah",
    department: "Engineering",
    company: "MTN Group",
  },
  {
    id: "STU008",
    name: "Esi Darko",
    department: "Business Admin",
    company: "Hubtel",
  },
];

const initialAssignments = [
  {
    id: 1,
    name: "Dr. Kwame Asante",
    initials: "KA",
    department: "Computer Science",
    count: 5,
    avatarBg: "bg1",
  },
  {
    id: 2,
    name: "Prof. Ama Mensah",
    initials: "AM",
    department: "Engineering",
    count: 4,
    avatarBg: "bg2",
  },
  {
    id: 3,
    name: "Dr. Yaw Boateng",
    initials: "YB",
    department: "Business Admin",
    count: 3,
    avatarBg: "bg3",
  },
  {
    id: 4,
    name: "Prof. Kofi Djan",
    initials: "KD",
    department: "Sciences",
    count: 4,
    avatarBg: "bg4",
  },
];

export default function AssignSupervisors() {
  const [unassigned, setUnassigned] = useState(initialUnassigned);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [studentInput, setStudentInput] = useState("");
  const [supervisorInput, setSupervisorInput] = useState("");

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    if (!studentInput.trim() || !supervisorInput.trim()) return;

    // Check if matching unassigned student
    const matchedStudent = unassigned.find(
      (s) =>
        s.name.toLowerCase().includes(studentInput.toLowerCase()) ||
        s.id.toLowerCase().includes(studentInput.toLowerCase())
    );

    // Check if matching supervisor
    const matchedSupervisorIndex = assignments.findIndex((sup) =>
      sup.name.toLowerCase().includes(supervisorInput.toLowerCase())
    );

    if (matchedStudent && matchedSupervisorIndex !== -1) {
      // Remove from unassigned list
      setUnassigned(unassigned.filter((s) => s.id !== matchedStudent.id));

      // Add student count to supervisor
      const updatedAssignments = [...assignments];
      updatedAssignments[matchedSupervisorIndex].count += 1;
      setAssignments(updatedAssignments);

      // Reset fields
      setStudentInput("");
      setSupervisorInput("");
      alert(`Successfully assigned ${matchedStudent.name} to ${assignments[matchedSupervisorIndex].name}`);
    } else {
      alert("Could not find matching student or supervisor in current lists.");
    }
  };

  const handleInlineAssign = (student) => {
    // Inline quick assign
    setStudentInput(student.name);
    // Find supervisor of same department
    const matchedSup = assignments.find(
      (sup) => sup.department.toLowerCase() === student.department.toLowerCase()
    );
    if (matchedSup) {
      setSupervisorInput(matchedSup.name);
    }
  };

  // Calculations for Stat Cards
  const totalSupervisors = 5;
  const activeSupervisors = 4;
  const totalStudentsAssigned = assignments.reduce((acc, curr) => acc + curr.count, 0) + (3 - unassigned.length);

  return (
    <div className="assignSupervisors">
      {/* Header */}
      <div className="assignHeader">
        <div className="assignTitle">
          <h2>Assign Supervisors</h2>
          <p>Assign academic supervisors to students for their internship supervision</p>
        </div>
      </div>

      {/* Stat Cards Grid (3 Columns) */}
      <div className="supervisorsStatCards">
        {/* Total Supervisors */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Total Supervisors</p>
            <h3>{totalSupervisors}</h3>
          </div>
          <div className="supStatIcon blue">
            <GraduationCap size={22} />
          </div>
        </div>

        {/* Active Supervisors */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Active Supervisors</p>
            <h3>{activeSupervisors}</h3>
          </div>
          <div className="supStatIcon green">
            <CheckCircle size={22} />
          </div>
        </div>

        {/* Students Assigned */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Students Assigned</p>
            <h3>{totalStudentsAssigned}</h3>
          </div>
          <div className="supStatIcon purple">
            <Users size={22} />
          </div>
        </div>
      </div>

      {/* Assign Supervisor to Student Card */}
      <div className="assignFormCard">
        <h3>Assign Supervisor to Student</h3>
        <form onSubmit={handleAssignSubmit} className="assignFormFields">
          <div className="formGroup">
            <label>Select Student</label>
            <div className="inputSearchContainer">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search student by name or ID..."
                value={studentInput}
                onChange={(e) => setStudentInput(e.target.value)}
              />
            </div>
          </div>
          <div className="formGroup">
            <label>Select Supervisor</label>
            <div className="inputSearchContainer">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search supervisor..."
                value={supervisorInput}
                onChange={(e) => setSupervisorInput(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="submitAssignmentBtn">
            <UserPlus size={16} />
            Assign Supervisor
          </button>
        </form>
      </div>

      {/* Unassigned Students Section */}
      <div className="unassignedCard">
        <h3>Unassigned Students</h3>
        <table className="unassignedTable">
          <thead>
            <tr>
              <th>Student</th>
              <th>Department</th>
              <th>Company</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {unassigned.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="studentUnassignedGroup">
                    <span className="studentUnassignedName">{student.name}</span>
                    <span className="studentUnassignedId">{student.id}</span>
                  </div>
                </td>
                <td>
                  <span className="departmentPill">{student.department}</span>
                </td>
                <td style={{ color: "#475569" }}>{student.company}</td>
                <td>
                  <button
                    type="button"
                    className="inlineAssignBtn"
                    onClick={() => handleInlineAssign(student)}
                  >
                    <UserPlus size={14} />
                    Assign
                  </button>
                </td>
              </tr>
            ))}
            {unassigned.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#64748b", padding: "20px" }}>
                  All students have been assigned!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Current Assignments List */}
      <div className="assignmentsCard">
        <h3>Current Assignments</h3>
        <div className="assignmentsList">
          {assignments.map((assignment) => (
            <div className="assignmentItem" key={assignment.id}>
              <div className="assignmentSupCell">
                <div className={`assignmentAvatar ${assignment.avatarBg}`}>
                  {assignment.initials}
                </div>
                <div className="assignmentNameGroup">
                  <span className="assignmentSupName">{assignment.name}</span>
                  <span className="assignmentDept">{assignment.department}</span>
                </div>
              </div>
              <div className="studentsAssignedCount">
                <strong>{assignment.count} students</strong> assigned
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (sum, curStudent) => sum + curStudent.id,
      0,
    );
  }
  return 0;
}

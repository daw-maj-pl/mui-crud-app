const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId'
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' }
];

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) === null)
    localStorage.setItem(KEYS.employeeId, '0');
  let id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
};

export const insertEmployee = data => {
  let employees = getAllEmployees();
  employees.push(data);
  data['id'] = generateEmployeeId();
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

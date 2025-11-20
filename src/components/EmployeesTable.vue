<script>
import DeleteEmployee from './DeleteEmployee.vue'

export default {
  components: {
    DeleteEmployee,
  },
  data() {
    return {
      showDeleteEmployee: false,
      employeeToDelete: null,
    }
  },
  props: ['search', 'employees'],
  methods: {
    openDeleteModal(index) {
      const employee = this.filteredEmployees[index]
      this.employeeToDelete = this.employees.indexOf(employee)
      this.showDeleteEmployee = true
    },
    deleteEmployee() {
      this.employees.splice(this.employeeToDelete, 1)
      this.showDeleteEmployee = false
    },
    toggleSelectAll() {
      const newValue = !this.allSelected
      this.employees.forEach((emp) => {
        emp.selected = newValue
      })
    },
  },
  computed: {
    allSelected() {
      return this.employees.length > 0 && this.employees.every((emp) => emp.selected)
    },
    filteredEmployees() {
      if (!this.search) return this.employees

      const term = this.search.toLowerCase()

      return this.employees.filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(term) || emp.lastName.toLowerCase().includes(term),
      )
    },
  },
}
</script>
<template lang="">
  <div class="overflow-x-auto">
    <table class="w-full border-separate border-spacing-y-2">
      <thead>
        <tr>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">
            <input
              type="checkbox"
              name=""
              value=""
              :checked="allSelected"
              @change="toggleSelectAll"
              class="w-4 h-4 accent-[#013C61]"
            />
          </th>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">FIRST NAME</th>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">LAST NAME</th>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">EMAIL</th>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">PHONE</th>
          <th class="text-left text-sm text-[#013C61] font-medium px-4 py-3">ROLE</th>
          <th class="text-right text-sm text-[#013C61] font-medium px-4 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="filteredEmployees.length > 0">
          <tr
            v-for="(employee, index) in filteredEmployees"
            :key="index"
            class="bg-white rounded-lg shadow-md hover:bg-[#2BDA53]/40 transition-colors"
          >
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">
              <input
                type="checkbox"
                v-model="employee.selected"
                name=""
                value=""
                class="w-4 h-4 accent-[#013C61]"
              />
            </td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ employee.firstName }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ employee.lastName }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ employee.email }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">{{ employee.phone }}</td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A]">
              <span
                :class="
                  employee.role === 'Admin' ? 'text-green-500 font-semibold' : 'text-[#6A7E8A]'
                "
              >
                {{ employee.role }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm text-[#6A7E8A] text-right cursor-pointer">
              <button @click="openDeleteModal(index)">
                <img src="/icons/trash.svg" alt="Delete" class="w-4 h-4" />
              </button>
            </td>
          </tr>
        </template>
        <!-- No results message -->
        <tr v-else>
          <td colspan="7" class="text-center py-6 text-[#6A7E8A] text-base">
            No results found for "<span class="font-semibold text-[#013C61]">{{ search }}</span
            >"
          </td>
        </tr>
      </tbody>
    </table>
    <DeleteEmployee
      v-if="showDeleteEmployee"
      @no="showDeleteEmployee = false"
      @confirm-delete="deleteEmployee"
      :employee="employees[employeeToDelete]"
    />
  </div>
</template>

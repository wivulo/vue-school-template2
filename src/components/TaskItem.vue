<script>
export default {
    name: "TaskItem",
    props: {
        task: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isSelected: false
        }
    }
}
</script>

<template>
    <tr>
        <th scope="row">
            <input type="checkbox" :checked="isSelected">
        </th>
        <td>{{ task }}</td>
        <td>{{ category }}</td>
        <td> {{ done }}</td>
      </tr>
</template>
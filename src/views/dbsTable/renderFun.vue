<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    row: Object,
    render: Function,
    index: Number || String,
    column: { type: Object, default: null },
  },
  render: function () {
    return this.render(this.row, this.index);
  },
});
</script>

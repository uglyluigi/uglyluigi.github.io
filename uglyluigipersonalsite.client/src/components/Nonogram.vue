<script setup>
	import { ref, computed } from 'vue'
    const nonogram_data = ref([[true, false, true, true], [false, true, false, false], [true, true, true, true]]);
	const placeholder_matrix = ref(buildPlaceholder());
    const solve_matrix = computed(() => {
		let matrix = [];

        for (let row of nonogram_data.value) {
            let count = 0;
            let matrix_row = [];

            for (let i = 0; i < row.length; i++) {
                if (row[i]) count++;
                if ((!row[i] || i == row.length - 1) && count > 0) {
                    matrix_row.push(count);
                    count = 0;
                }
            }

            // the only time we should push 0 into the solve matrix
            // is if the row truly has zero blocks.
            if (row.reduce((partialSum, x) => partialSum + x, 0) === 0) {
                matrix_row.push(0);
            }

            matrix.push(matrix_row);
        }

		return matrix;
    });
	const isSolved = computed(() => { 
		return JSON.stringify(nonogram_data.value) === JSON.stringify(placeholder_matrix.value);
	});

	function buildPlaceholder() {
		let placeholder = new Array(nonogram_data.value.length);
		for (let i = 0; i < placeholder.length; i++) {
			placeholder[i] = new Array(nonogram_data.value[i].length);
			placeholder[i].fill(false);
		}
		return placeholder;
	}
</script>

<template>
	<div class="board flex flex-col">
		<div class="flex flex-row self-end board-row" v-for="(board_row, i) in placeholder_matrix">
			<div class="flex flex-row items-center px-1" v-for="solve_values in solve_matrix[i]">
				{{ solve_values }}
			</div>
			<div class="grid-cell"
				 v-for="(value, j) in board_row"
				 :class="{ selected: placeholder_matrix[i][j], unselected: !placeholder_matrix[i][j] }"
				 :key="placeholder_matrix[i][j]"
				 @click.left="placeholder_matrix[i][j] = !placeholder_matrix[i][j]">
			</div>
		</div>
		<div :key="placeholder_matrix" v-if="isSolved">
			Solved!!!! Wow!!!
		</div>
	</div>
</template>

<style scoped>
	.board {
	}

	.board-row {
	}

	.grid-cell {
		height: 50px;
		width: 50px;
	}

	.unselected {
		background-color: white;
	}

	.selected {
		background-color: red;
	}

	.excluded {

	}
</style>

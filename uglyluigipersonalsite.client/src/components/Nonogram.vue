<script setup>
	import { ref } from 'vue'
	let nonogram_data = [[true, false], [false, true]];
	let solve_matrix = compute_solve_matrix(nonogram_data);
	let placeholder_matrix = ref(build_placeholder_matrix(nonogram_data));

	function build_placeholder_matrix(nonogram_matrix) {
		let placeholder = nonogram_matrix.slice();

		for (let row of placeholder) {
			row.fill(false);
		}

		return placeholder;
	}

	function is_solved(nonogram_matrix, player_board_matrix) {
		if (nonogram_matrix.length != player_board_matrix.length) {
			console.log("Can't determine solve.");
		}

		for (let i = 0; i < nonogram_matrix.length; i++) {
			if (nonogram_matrix[i] != player_board_matrix[i]) return false;
		}

		return true;
	}

	function compute_solve_matrix(nonogram_matrix) {
		let matrix = [];
		for (let row of nonogram_matrix) {
			let count = 0;
			let matrix_row = [];

			for (let filled of row) {
				if (filled) count++;
				else if (!filled && count > 0) {
					matrix_row.push(count);
					count = 0;
				}
			}

			if (row.reduce((partialSum, x) => partialSum + x, 0) === 0) {
                matrix_row.push(0);
			}

			matrix.push(matrix_row);
		}

		return matrix;
	}

</script>

<template>
	<div class="board flex flex-col">
		<div class="flex flex-row board-row" v-for="(board_row, i) in placeholder_matrix">
			<div class="grid-cell"
				 v-for="(value, j) in board_row"
				 :class="{ selected: placeholder_matrix[i][j], unselected: !placeholder_matrix[i][j] }"
				 :key="placeholder_matrix"
				 @click="placeholder_matrix[i][j] = !placeholder_matrix[i][j]">
			</div>
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
</style>

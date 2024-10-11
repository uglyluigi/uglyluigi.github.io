<script setup>
	import { ref, computed } from 'vue'
	const EMPTY = "EMPTY";
	const FILLED = "FILLED";
	const EXCLUDED = "EXCLUDED";

	const nonogram_data = ref([[FILLED, EMPTY, FILLED, FILLED], [EMPTY, FILLED, EMPTY, EMPTY], [FILLED, FILLED, FILLED, FILLED]]);
	const placeholder_matrix = ref(buildPlaceholder());
	const horizontalSolveMatrix = computed(() => { return buildSolveMatrix(nonogram_data.value) } );
	const verticalSolveMatrix = computed(() => { return buildSolveMatrix(nonogram_data.value, true) } );
	const isSolved = computed(() => { 
		return JSON.stringify(nonogram_data.value) === JSON.stringify(placeholder_matrix.value);
	});

	function transposeMatrix(matrix) {
		let transMatrix = [];
		for (let i = 0; i < matrix[i].length; i++) {
			transMatrix.push(matrix.map(function (val, idx) { return val[i]; }));
		}
		return transMatrix;
	}

	function buildSolveMatrix(nonogram_matrix, transpose) {
		let matrix = [];
		let colIdx = 0;
		let opMatrix = nonogram_matrix;

		if (transpose) {
            opMatrix = transposeMatrix(opMatrix);
		} else {
            for (let row of opMatrix) {
                let count = 0;
                let matrix_row = [];

                for (let i = 0; i < row.length; i++) {
                    if (row[i] === FILLED) count++;
                    if ((row[i] !== FILLED || i == row.length - 1) && count > 0) {
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
		}

		return matrix;
	}

	function buildPlaceholder() {
		let placeholder = new Array(nonogram_data.value.length);
		for (let i = 0; i < placeholder.length; i++) {
			placeholder[i] = new Array(nonogram_data.value[i].length);
			placeholder[i].fill(EMPTY);
		}
		return placeholder;
	}

	function toggleSquare(i, j) {
		let val = placeholder_matrix.value[i][j];
		placeholder_matrix.value[i][j] = (val === EMPTY || val === EXCLUDED) ? FILLED : EMPTY;
	}

	function excludeSquare(i, j) {
		placeholder_matrix.value[i][j] = EXCLUDED;
	}

	function isExcluded(i, j) {
		return placeholder_matrix.value[i][j] === EXCLUDED;
	}

	function isSelected(i, j) {
		return placeholder_matrix.value[i][j] === FILLED;
	}
</script>

<template>
	<div class="board flex flex-col">
		<div class="flex flex-row w-full justify-around">
			<div style="width: 5%"></div>
			<div class="flex flex-col" v-for="(row, i) in verticalSolveMatrix">
				<div class="flex items-center px-1" v-for="value in verticalSolveMatrix[i]">
					{{ value }}
				</div>
			</div>
		</div>
		
		<div class="flex flex-col self-end board-row" v-for="(board_row, i) in placeholder_matrix">

			<div class="flex flex-row">
				<div class="flex flex-row items-center px-1" v-for="solve_values in horizontalSolveMatrix[i]">
					{{ solve_values }}
				</div>

				<div class="grid-cell"
					 v-for="(value, j) in board_row"
					 :class="{ selected: isSelected(i, j), excluded: isExcluded(i, j), unselected: !isSelected(i, j) && !isExcluded(i, j) }"
					 :key="placeholder_matrix[i][j]"
					 @click.left="toggleSquare(i, j)"
					 @contextmenu.prevent="(e) => e.preventDefault()"
					 @click.right="excludeSquare(i, j)">
				</div>
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
		background-color: coral;
	}
</style>

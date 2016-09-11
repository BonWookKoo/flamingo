/*
 * Copyright (C) 2011 Flamingo Project (http://www.cloudine.io).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.ns('Flamingo.view.workflowdesigner.shape');
Ext.ns('Flamingo.view.workflowdesigner.shape.ankus');
Ext.ns('Flamingo.view.workflowdesigner.shape.bpmn');
Ext.ns('Flamingo.view.workflowdesigner.shape.etl');
Ext.ns('Flamingo.view.workflowdesigner.shape.giraph');
Ext.ns('Flamingo.view.workflowdesigner.shape.mahout');
Ext.ns('Flamingo.view.workflowdesigner.shape.rules');
Ext.ns('Flamingo.view.workflowdesigner.shape.gis');

/**
 * Workflow Designer의 각 모듈과 서버 사이드에 정의된 모듈과 통신하기 위해서는
 * applicationContext-activiti.xml에 taskProps ID가 정의되어 있어야 실행이 가능하다.
 *
 * @type {string[]}
 */
var shapes = [
    'Flamingo.view.workflowdesigner.shape.HADOOP_HIVE',
    'Flamingo.view.workflowdesigner.shape.HADOOP_MR',
    'Flamingo.view.workflowdesigner.shape.HADOOP_JAVA',
    'Flamingo.view.workflowdesigner.shape.HADOOP_SHELL',
    'Flamingo.view.workflowdesigner.shape.HADOOP_PYTHON',
    'Flamingo.view.workflowdesigner.shape.HADOOP_PIG',
    'Flamingo.view.workflowdesigner.shape.HADOOP_SQOOP_IMPORT',
    'Flamingo.view.workflowdesigner.shape.HADOOP_SQOOP_EXPORT',
    'Flamingo.view.workflowdesigner.shape.HADOOP_SPARK',
    'Flamingo.view.workflowdesigner.shape.HADOOP_SPARK_LINEAR_REGRESSION',
    'Flamingo.view.workflowdesigner.shape.HADOOP_R',

    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CERTAIN_FACTOR_SUM',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CF_ITEM_RECOMMEND',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CF_SIM',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CF_USER_RECOMMEND',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CONTENT_SIM',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CORR_BOOL',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CORR_NUMERIC',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_CORR_STRING',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_KMEANS',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_EM',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_ID3',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_NOMINAL_STATISTICS',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_NORMAL',
    'Flamingo.view.workflowdesigner.shape.ankus.ALG_ANKUS_NUMERIC_STATISTICS',

    'Flamingo.view.workflowdesigner.shape.bpmn.BPMN_INCLUSIVE_FORK',
    'Flamingo.view.workflowdesigner.shape.bpmn.BPMN_INCLUSIVE_JOIN',
    'Flamingo.view.workflowdesigner.shape.bpmn.BPMN_JOIN',
    'Flamingo.view.workflowdesigner.shape.bpmn.BPMN_PARALLEL',
    'Flamingo.view.workflowdesigner.shape.bpmn.SUBPROCESS',

    'Flamingo.view.workflowdesigner.shape.etl.ETL_UIMA_APP',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_UIMA_SEQ',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_APACHE_ACCESS',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_CHAR_REMOVER',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_ACCOUNTING',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_AGGREGATE',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_CLEAN',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_FILTER',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_GENERATE',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_GREP',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_GROUPBY',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_RANK',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_REPLACE_COLUMN',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_REPLACE_DELIMITER',
    'Flamingo.view.workflowdesigner.shape.etl.ETL_TEXT_TO_SEQ',

    'Flamingo.view.workflowdesigner.shape.rules.MVEL_EDITOR',
    'Flamingo.view.workflowdesigner.shape.rules.MVEL_FILE',
    'Flamingo.view.workflowdesigner.shape.rules.DROOLS_EDITOR',
    'Flamingo.view.workflowdesigner.shape.rules.DROOLS_FILE',
    'Flamingo.view.workflowdesigner.shape.rules.ESPER_EDITOR',
    'Flamingo.view.workflowdesigner.shape.rules.ESPER_FILE',

    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_CF_ITEM',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_KMEANS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_FUZZY_K_MEANS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_MINHASH',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_CANOPY',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_PARALLEL_FP_MINING',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_MATRIX_FACT_ALS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_PARALLEL_ALS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_NAIVE_MATRIX',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_SPECTRAL_K_MEANS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_STREAMING_K_MEANS',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_SEQ2SPARSE',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_TESTNB',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_TRAINNB',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_QUALCLUSTER',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_CLUSTER_DUMP',
    'Flamingo.view.workflowdesigner.shape.mahout.ALG_MAHOUT_SEQDIRECTORY',

    'Flamingo.view.workflowdesigner.shape.gis.DBF_TO_CSV',
    'Flamingo.view.workflowdesigner.shape.gis.ExtractLink'
];

for (var i = 0; i < shapes.length; i++) {
    var text = shapes[i];
    var splitText = shapes[i].split('.');
    var alias = splitText[splitText.length - 1];
    var ref = (splitText.length == 5) ? alias : splitText[splitText.length - 2] + "." + [alias];
    makeShape(ref, alias, text);
}
// ref
function makeShape(ref, alias, text) {
    var refArr = ref.split('.');
    if (refArr.length == 1) {
        Flamingo.view.workflowdesigner.shape[ref] = function (image, label) {
            Flamingo[alias].superclass.call(this, image, label);
            this.SHAPE_ID = text;
        };

        Flamingo.view.workflowdesigner.shape[ref].prototype = new OG.shape.ImageShape();
        Flamingo.view.workflowdesigner.shape[ref].superclass = OG.shape.ImageShape;
        Flamingo.view.workflowdesigner.shape[ref].prototype.constructor = text;
        Flamingo.view.workflowdesigner.shape[ref].className = text;

        Flamingo[alias] = Flamingo.view.workflowdesigner.shape[ref];
    } else if (refArr.length == 2) {
        Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]] = function (image, label) {
            Flamingo[alias].superclass.call(this, image, label);
            this.SHAPE_ID = text;
        };

        Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]].prototype = new OG.shape.ImageShape();
        Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]].superclass = OG.shape.ImageShape;
        Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]].prototype.constructor = text;
        Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]].className = text;
        Flamingo[alias] = Flamingo.view.workflowdesigner.shape[refArr[0]][refArr[1]];
    }
}

Ext.define('Flamingo.view.workflowdesigner.canvas.Canvas', {
    extend: 'Ext.form.Panel',
    alias: 'widget.canvas',

    /**
     * Workflow Designer의 UI 노드
     */
    requires: [
        'Flamingo.view.workflowdesigner.canvas.CanvasController',

        'Flamingo.view.workflowdesigner.property.HADOOP_HIVE',
        'Flamingo.view.workflowdesigner.property.HADOOP_MR',
        'Flamingo.view.workflowdesigner.property.HADOOP_JAVA',
        'Flamingo.view.workflowdesigner.property.HADOOP_SHELL',
        'Flamingo.view.workflowdesigner.property.HADOOP_PYTHON',
        'Flamingo.view.workflowdesigner.property.HADOOP_PIG',
        'Flamingo.view.workflowdesigner.property.HADOOP_SQOOP_IMPORT',
        'Flamingo.view.workflowdesigner.property.HADOOP_SQOOP_EXPORT',
        'Flamingo.view.workflowdesigner.property.HADOOP_SPARK',
        'Flamingo.view.workflowdesigner.property.HADOOP_SPARK_LINEAR_REGRESSION',
        'Flamingo.view.workflowdesigner.property.HADOOP_R',

        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CERTAIN_FACTOR_SUM',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CF_ITEM_RECOMMEND',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CF_SIM',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CF_USER_RECOMMEND',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CONTENT_SIM',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CORR_BOOL',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CORR_NUMERIC',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_CORR_STRING',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_KMEANS',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_EM',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_ID3',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_NOMINAL_STATISTICS',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_NORMAL',
        'Flamingo.view.workflowdesigner.property.ankus.ALG_ANKUS_NUMERIC_STATISTICS',

        'Flamingo.view.workflowdesigner.property.bpmn.BPMN_INCLUSIVE_FORK',
        'Flamingo.view.workflowdesigner.property.bpmn.BPMN_INCLUSIVE_JOIN',
        'Flamingo.view.workflowdesigner.property.bpmn.BPMN_PARALLEL',
        'Flamingo.view.workflowdesigner.property.bpmn.BPMN_JOIN',
        'Flamingo.view.workflowdesigner.property.bpmn.SUBPROCESS',

        'Flamingo.view.workflowdesigner.property.etl.ETL_UIMA_APP',
        'Flamingo.view.workflowdesigner.property.etl.ETL_UIMA_SEQ',
        'Flamingo.view.workflowdesigner.property.etl.ETL_APACHE_ACCESS',
        'Flamingo.view.workflowdesigner.property.etl.ETL_CHAR_REMOVER',
        'Flamingo.view.workflowdesigner.property.etl.ETL_ACCOUNTING',
        'Flamingo.view.workflowdesigner.property.etl.ETL_AGGREGATE',
        'Flamingo.view.workflowdesigner.property.etl.ETL_CLEAN',
        'Flamingo.view.workflowdesigner.property.etl.ETL_FILTER',
        'Flamingo.view.workflowdesigner.property.etl.ETL_GENERATE',
        'Flamingo.view.workflowdesigner.property.etl.ETL_GREP',
        'Flamingo.view.workflowdesigner.property.etl.ETL_GROUPBY',
        'Flamingo.view.workflowdesigner.property.etl.ETL_RANK',
        'Flamingo.view.workflowdesigner.property.etl.ETL_REPLACE_COLUMN',
        'Flamingo.view.workflowdesigner.property.etl.ETL_REPLACE_DELIMITER',
        'Flamingo.view.workflowdesigner.property.etl.ETL_TEXT_TO_SEQ',

        'Flamingo.view.workflowdesigner.property.rules.MVEL_EDITOR',
        'Flamingo.view.workflowdesigner.property.rules.MVEL_FILE',
        'Flamingo.view.workflowdesigner.property.rules.DROOLS_EDITOR',
        'Flamingo.view.workflowdesigner.property.rules.DROOLS_FILE',
        'Flamingo.view.workflowdesigner.property.rules.ESPER_EDITOR',
        'Flamingo.view.workflowdesigner.property.rules.ESPER_FILE',

        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_CF_ITEM',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_KMEANS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_FUZZY_K_MEANS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_MINHASH',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_CANOPY',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_PARALLEL_FP_MINING',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_MATRIX_FACT_ALS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_PARALLEL_ALS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_NAIVE_MATRIX',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_SPECTRAL_K_MEANS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_STREAMING_K_MEANS',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_SEQ2SPARSE',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_TESTNB',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_TRAINNB',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_QUALCLUSTER',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_CLUSTER_DUMP',
        'Flamingo.view.workflowdesigner.property.mahout.ALG_MAHOUT_SEQDIRECTORY',

        'Flamingo.view.workflowdesigner.property.gis.DBF_TO_CSV',
        'Flamingo.view.workflowdesigner.property.gis.ExtractLink'
    ],

    controller: 'canvasController',

    layout: 'fit',

    autoScroll: true,

    forceLayout: true,

    cls: 'canvas_contents',

    graph: null,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    width: 400,
                    labelWidth: 100,
                    maxLength: 100,
                    fieldLabel: 'Workflow name',
                    id: 'wd_fld_name',
                    name: 'name',
                    emptyText: 'Enter a Workflow name.',
                    allowBlank: false
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_id',
                    name: 'id',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_tree_id',
                    name: 'tree_id',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_status',
                    name: 'status',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_process_id',
                    name: 'process_id',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_process_definition_id',
                    name: 'process_definition_id',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_deployment_id',
                    name: 'deployment_id',
                    allowBlank: true
                },
                {
                    xtype: 'hidden',
                    id: 'wd_fld_desc',
                    name: 'desc',
                    allowBlank: true
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    id: 'wd_btn_create',
                    text: 'New',
                    iconCls: 'common-new',
                    listeners: {
                        click: 'onCreateClick'
                    }
                },
                {
                    id: 'wd_btn_save',
                    text: 'Save',
                    iconCls: 'common-save',
                    listeners: {
                        click: 'onSaveClick'
                    }
                },
                {
                    id: 'wd_btn_run',
                    text: 'Run',
                    iconCls: 'common-execute',
                    disabled: true,
                    listeners: {
                        click: 'onRunClick'
                    }
                },
//                '-',
                {
                    id: 'wd_btn_xml',
                    text: 'View',
                    iconCls: 'hdfs-directory-info',
                    disabled: true,
                    hidden: true,
                    listeners: {
                        click: 'onWorkflowXMLClick'
                    }
                },
//                '-',
                {
                    id: 'wd_btn_copy',
                    text: 'Copy',
                    iconCls: 'common-file-copy',
                    disabled: true,
                    listeners: {
                        click: 'onWorkflowCopyClick'
                    }
                }
            ]
        }
    ],
    listeners: {
        highlightById: 'highlightById',
        unhighlightById: 'unhighlightById',
        getwiredIdByElement: 'getwiredIdByElement',
        setwireEvent: 'setwireEvent',
        setwireEventAll: 'setwireEventAll',

        render: 'onCanvasRender',
        resize: 'onCanvasResize',

        nodeBeforeConnect: 'onCanvasNodeBeforeConnect',
        nodeConnect: 'onCanvasNodeConnect',
        nodeDisconnected: 'onCanvasNodeDisconnected',
        nodeBeforeRemove: 'onCanvasNodeBeforeRemove',

        beforeLabelChange: 'onCanvasBeforeLabelChange',
        labelChanged: 'onCanvasLabelChanged'
    },
    highlightById: function (elementId) {
        this.fireEvent('highlightById', elementId);
    },
    unhighlightById: function (elementId) {
        this.fireEvent('unhighlightById', elementId);
    },
    setwireEvent: function (shapeElement) {
        this.fireEvent('setwireEvent', shapeElement);
    },
    setwireEventAll: function () {
        this.fireEvent('setwireEventAll');
    }
});